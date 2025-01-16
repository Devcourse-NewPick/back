import { Injectable, Logger } from "@nestjs/common";
import * as puppeteer from 'puppeteer';

@Injectable()
export class PagingService {
  private readonly logger = new Logger(PagingService.name);
  // 크롤링 모듈 선언 및 초기화
  private browser: puppeteer.Browser;
  // 브라우저 초기화
  async initBrowser(): Promise<puppeteer.Browser> {
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
  // 페이지 생성
  async initPage(browser: puppeteer.Browser): Promise<puppeteer.Page> {
    const page = await browser.newPage();
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    ];
    const randomAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    await page.setUserAgent(randomAgent);
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ko-KR,ko;q=0.9',
      'Referer': 'https://news.naver.com',
    });

    this.logger.debug(`Page initialize with User-Agent: ${randomAgent}`);

    return page;
  }
  // 브라우저 종료
  async closeBrowser(browser: puppeteer.Browser): Promise<void> {
    if (browser) {
      await browser.close();
    }
  }
}