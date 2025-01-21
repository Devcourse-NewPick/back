import { Injectable } from "@nestjs/common";
import PQueue from '@esm2cjs/p-queue';

@Injectable()
export class UtilService {
  private readonly queue = new PQueue({ concurrency: 5 });

  async setQueue<T>(tasks: Array<() => Promise<T>>): Promise<T[]> {
    return Promise.all(tasks.map((task) => this.queue.add(task)));
  }

  async setDelay(min: number = 1000, max: number = 3000) {
    const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => setTimeout(resolve, randomTime));
  }
}