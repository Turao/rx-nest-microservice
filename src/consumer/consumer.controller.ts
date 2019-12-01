import { Controller, Inject, OnApplicationBootstrap } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Logger } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  Client,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  private readonly logger = new Logger();

  @Client({
    transport: Transport.RMQ,
    options: {
      isGlobalPrefetchCount: false,
      queueOptions: { consumerTag: 'consumer' },
    },
  })
  private readonly messageBrokerClient: ClientProxy;

  constructor(private readonly service: ConsumerService) {}

  @EventPattern('message')
  async onEvent(data: any): Promise<any> {
    this.logger.debug('Received Event:' + data);
    return this.service.doSomethingWithPayload(data);
  }
}
