import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Logger } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('github')
export class GithubController {
  private readonly logger = new Logger();

  @Client({ transport: Transport.RMQ })
  private readonly messageBrokerClient: ClientProxy;

  constructor(private readonly service: GithubService) {}

  @Get('repository/:id')
  onRepositoryCreated(@Param('id') id: string) {
    this.logger.debug('Emitting repository id to RabbitMQ: ' + id);
    this.messageBrokerClient.emit('repository_created', id);
  }
}
