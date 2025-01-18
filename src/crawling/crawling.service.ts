import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import PQueue from '@esm2cjs/p-queue';
import * as puppeteer from 'puppeteer';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrawledNews } from './schema/crwaled-news.schema';
import dayjs from 'dayjs';
import { News } from '../ai-summary/openai.service';

@Injectable()
export class CrawlingService implements OnModuleDestroy {
  constructor(
    @InjectModel(CrawledNews.name)
    private crawledNewsModel: Model<CrawledNews>,
  ) {}

  async create(createCrawledNewsDto: any): Promise<CrawledNews> {
    const createdNews = new this.crawledNewsModel(createCrawledNewsDto);
    return createdNews.save();
  }

  async findAll() {
    const count = await this.crawledNewsModel.countDocuments();
    console.log('총 문서 수:', count);
    const allNews = await this.crawledNewsModel.find({}).lean().exec();

    console.log('조회된 문서 수:', allNews.length);

    return allNews;
  }

  async findAllByDate(dateTo: number) {
    const allNews = await this.crawledNewsModel
      .find({ dateTo: { $lte: dateTo } })
      .lean()
      .exec();
    return allNews;
  }
  async findByDateRange(dateStart: string, dateEnd: string): Promise<News[]> {
    const startDate = dayjs(dateStart).format('YYYY-MM-DD');
    const endDate = dayjs(dateEnd).format('YYYY-MM-DD');

    this.logger.debug(`검색 기간: ${startDate} ~ ${endDate}`);

    const news = await this.crawledNewsModel
      .find({
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .lean()
      .exec();
    return news as unknown as News[];
  }

  async findOne(id: string): Promise<CrawledNews> {
    return this.crawledNewsModel.findById(id).exec();
  }

  async update(id: string, updateCrawledNewsDto: any): Promise<CrawledNews> {
    return this.crawledNewsModel
      .findByIdAndUpdate(id, updateCrawledNewsDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<CrawledNews> {
    return this.crawledNewsModel.findByIdAndDelete(id).exec();
  }

  private browser: puppeteer.Browser;
  private readonly logger = new Logger(CrawlingService.name);

  // 브라우저 초기화
  private async initBrowser(): Promise<puppeteer.Browser> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
          '--window-size=1920x1080',
        ],
      });
    }
    return this.browser;
  }
  // 페이지 초기화
  private async initPage(page: puppeteer.Page): Promise<void> {
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    ];
    const randomAgent =
      userAgents[Math.floor(Math.random() * userAgents.length)];
    await page.setUserAgent(randomAgent);
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ko-KR,ko;q=0.9',
      Referer: 'https://news.naver.com',
    });
    this.logger.debug(`Page initialize with User-Agent: ${randomAgent}`);
  }

  // 랜덤 딜레이 (1~3초)
  async randomDelay() {
    const randomTime = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
    return new Promise((resolve) => setTimeout(resolve, randomTime));
  }

  // 뉴스 사이트 크롤링 (네이버 뉴스 기준)
  async crawlGeneralNews(): Promise<any> {
    const crawlingResultData = [];

    const links = [
      'https://news.naver.com/section/100',
      'https://news.naver.com/section/101',
      'https://news.naver.com/section/102',
      'https://news.naver.com/section/103',
      'https://news.naver.com/section/104',
      'https://news.naver.com/section/105',
    ];

    const queue = new PQueue({ concurrency: 5 });

    const browser = await this.initBrowser();
    const page = await browser.newPage();
    try {
      for (const link of links) {
        await this.initPage(page);
        // 페이지 이동
        await page.goto(link, { waitUntil: 'networkidle2', timeout: 30000 });
        await this.randomDelay();
        // 페이지 크롤링
        const crawlingNews = await page.evaluate(() => {
          const newsList = document.querySelectorAll(
            '.sa_item._SECTION_HEADLINE .sa_text_title',
          );
          const newsItems = Array.from(newsList)
            .map((news) => ({
              title: news.textContent?.trim(),
              link: (news as HTMLAnchorElement)?.href || null,
            }))
            .filter((news) => news.link);
          return [...newsItems];
        });
        // 크롤링 결과 확인
        console.log(crawlingNews);

        const crawlingNewsDetail = await Promise.all(
          crawlingNews.map((news) => {
            return queue.add(async () => this.crawlSingleNews(browser, news));
          }),
        );
        // 크롤링 최종 결과 배열에 저장
        crawlingResultData.push(
          ...crawlingNewsDetail.filter((news) => news !== null),
        );
      }
    } catch (error) {
      this.logger.error(`Error during crawling: ${error.message}`);
    } finally {
      // 페이지 닫기
      await page.close();
    }
    // 크롤링 최종 결과 확인
    this.logger.log(crawlingResultData);
    // 크롤링 결과값 반환 > 데이터베이스에 저장
    return JSON.stringify(crawlingResultData);
  }

  // 뉴스 기사 크롤링 (네이버 기사 기준)
  async crawlSingleNews(browser: puppeteer.Browser, news: any): Promise<any> {
    // 새 페이지 열기
    const page = await browser.newPage();
    try {
      await this.initPage(page);
      // 페이지 이동
      await page.goto(news.link, { waitUntil: 'networkidle2', timeout: 30000 });
      await this.randomDelay();
      // 다운 스크롤
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      // 페이지 크롤링
      const crawlingNews = await page.evaluate(() => {
        const source =
          document
            .querySelector('.media_end_head_top_logo_img')
            ?.getAttribute('title') || null;
        const dateTime =
          document
            .querySelector('.media_end_head_info_datestamp_time')
            ?.getAttribute('data-date-time') || null;
        const content =
          document.querySelector('#dic_area')?.textContent?.trim() || null;
        const images = Array.from(
          document.querySelectorAll('.end_photo_org img'),
        )
          .map((img) => img.getAttribute('data-src') || img.getAttribute('src'))
          .filter((src) => src);
        const category =
          document
            .querySelector('.media_end_categorize_item')
            ?.textContent?.trim() ||
          news.category ||
          null;
        return { source, category, dateTime, content, images };
      });
      // 크롤링 결과 반환
      return {
        title: news.title,
        link: news.link,
        ...crawlingNews,
      };
    } catch (error) {
      this.logger.error(`Error crawling article: ${news.url}`, error.message);
    } finally {
      // 페이지 닫기
      await page.close();
    }
  }

  // 브라우저 종료
  async onModuleDestroy() {
    if (this.browser) {
      await this.browser.close();
      this.logger.log(`browser closed`);
    }
  }
}
