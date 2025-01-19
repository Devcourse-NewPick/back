import { Injectable, Logger } from '@nestjs/common';
import { UtilService } from './util.service';
import { CrawlerService } from './crawler.service';
import { CrawlingRepository } from './crawling.repository';

import * as puppeteer from 'puppeteer';

@Injectable()
export class CrawlingService {
  constructor(
    private readonly utilService: UtilService,
    private readonly crawlerService: CrawlerService,
    private readonly crawlingRepository: CrawlingRepository,
  ) {}

  private readonly logger = new Logger(CrawlingService.name);

  private readonly links = [
    'https://news.naver.com/section/100',
    'https://news.naver.com/section/101',
    'https://news.naver.com/section/102',
    'https://news.naver.com/section/103',
    'https://news.naver.com/section/104',
    'https://news.naver.com/section/105',
  ];

  async crawling() {
    const crawledData = await this.crawlingNews();
    if (crawledData.length) {
      const saveCrawledData = await this.crawlingRepository.createCrawledNews(crawledData);
      this.logger.log(`Successfully processed ${saveCrawledData.length} items`);
    }
  }
  async crawlingNews(): Promise<any> {
    const crawlingResultData = [];
    // 브라우저 초기화
    const browser = await this.crawlerService.initBrowser();
    try {
      for (const link of this.links) {
        // 페이지 초기화
        const page = await this.crawlerService.initPage(browser);
        // 페이지 이동
        await page.goto(link, { waitUntil: 'networkidle2', timeout: 30000 });
        await this.utilService.setDelay();
        // 페이지 크롤링
        const crawlingNews = await page.evaluate(() => {
          const newsList = document.querySelectorAll('.sa_item._SECTION_HEADLINE .sa_text_title');
          const newsItems = Array.from(newsList).map(news => ({
            title: news.textContent?.trim(),
            link: (news as HTMLAnchorElement)?.href || null,
          })).filter(news => news.link);
          return [...newsItems];
        });
        await page.close();
        // 상세 페이지 크롤링
        const crawlingNewsDetail = await this.utilService.setQueue(
          crawlingNews.map((news) => async () => this.crawlingNewsDetail(browser, news))
        );
        // 크롤링 최종 결과 배열에 저장
        crawlingResultData.push(...crawlingNewsDetail.filter(news => news !== null));
      }
      // 크롤링 결과 확인
      this.logger.log(`Successfully crawled ${crawlingResultData.length} items`);
      return crawlingResultData;
    } catch (error) {
      this.logger.error(`Error during crawling: ${error.message}`);
    } finally {
      await this.crawlerService.closeBrowser(browser);
    }
  }
  async crawlingNewsDetail(browser: puppeteer.Browser, news: any): Promise<any> {
    // 페이지 초기화
    const page = await this.crawlerService.initPage(browser);
    try {
      // 페이지 이동
      await page.goto(news.link, { waitUntil: 'networkidle2', timeout: 30000 });
      // 다운 스크롤
      await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight) });
      await this.utilService.setDelay();
      // 페이지 크롤링
      const crawlingNews = await page.evaluate(() => {
        const source = document.querySelector('.media_end_head_top_logo_img')?.getAttribute('title') || null;
        const content = document.querySelector('#dic_area')?.textContent?.trim() || null;
        const publishedAt = document.querySelector('.media_end_head_info_datestamp_time')?.getAttribute('data-date-time') || null;
        const category = Array.from(document.querySelectorAll('.media_end_categorize_item')).map(item => item?.textContent?.trim() || news.category || null).filter(item => item);
        const images = Array.from(document.querySelectorAll('.end_photo_org img')).map(img => img.getAttribute('data-src') || img.getAttribute('src')).filter(src => src);
        return { source, category, publishedAt, images, content };
      });
      // 크롤링 결과 반환
      return { 
        regionCode: 'KR',
        title: news.title,
        link: news.link,
        ...crawlingNews,
       };
    } catch (error) {
      this.logger.error(`Error crawling article: ${news.url}`, error.message);
    } finally {
      await page.close();
    }
  }
}