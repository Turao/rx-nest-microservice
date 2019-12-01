import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  private readonly logger = new Logger();

  constructor(private readonly service: ConsumerService) {}

  @EventPattern('event')
  async onEvent(data: any): Promise<any> {
    this.logger.debug('Received Event: ' + data);
    return this.service.doSomethingWithPayload(data);
  }
}
