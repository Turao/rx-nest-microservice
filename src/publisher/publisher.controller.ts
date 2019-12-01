import { Controller, Get, Param } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { Logger } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

@Controller('publisher')
export class PublisherController {
  private readonly logger = new Logger();

  @Client({ transport: Transport.RMQ })
  private readonly messageBrokerClient: ClientProxy;

  constructor(private readonly service: PublisherService) {}

  @Get('event/:type')
  async doSomething(@Param('type') eventType: string) {
    this.logger.debug('Emitting event to RabbitMQ: ' + eventType);
    this.messageBrokerClient.emit<string>('message', eventType);
  }
}
