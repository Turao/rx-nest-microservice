import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger();

  async doSomethingWithPayload(payload: any) {
    this.logger.debug('Doing something with event payload...' + payload);
    return payload;
  }
}
