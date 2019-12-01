import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Controller()
export class ConsumerController {
  private readonly logger = new Logger();

  constructor(private readonly service: ConsumerService) {}

  @EventPattern('repository_created')
  onRepositoryCreated(id: string): Observable<string> {
    this.logger.debug('Received repository_created event with id: ' + id);
    return this.service
      .doSomethingWithRepositoryId(id)
      .pipe(tap(s => this.logger.debug('After being processed: ' + s)));
  }
}
