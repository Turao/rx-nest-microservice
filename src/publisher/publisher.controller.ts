import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { Logger } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

@Controller('publisher')
export class PublisherController {
  private readonly logger = new Logger();

  @Client({
    transport: Transport.RMQ,
    options: {
      isGlobalPrefetchCount: false,
      queueOptions: { consumerTag: 'producer' },
    },
  })
  private readonly messageBrokerClient: ClientProxy;

  constructor(private readonly service: PublisherService) {}

  @Get('username/:name')
  findByUsername(@Param('name') name: string): UserDTO {
    this.logger.debug(name);
    const user = this.service.findByUsername(name);
    if (user === undefined) throw new NotFoundException('User not found');

    return user;
  }

  @Get('event/:type')
  async doSomething(@Param('type') eventType: string) {
    this.logger.debug('Emitting event to RabbitMQ: ' + eventType);
    this.messageBrokerClient.emit<number, string>('message', eventType);
  }
}
