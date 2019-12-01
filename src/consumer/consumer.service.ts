import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger();

  async doSomethingWithPayload(data: any) {
    this.logger.debug('doing something with event payload...');
    return data;
  }
}
