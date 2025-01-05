import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class CrawlingService {
  async getNews() {
    const { data } = await axios.get('https://example.com/news');
    const $ = cheerio.load(data);
    const headlines = [];

    $('h2.title').each((i, el) => {
      headlines.push($(el).text());
    });

    return headlines;
  }
}
