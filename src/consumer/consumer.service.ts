import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger();

  doSomethingWithRepositoryId(id: string): Observable<string> {
    this.logger.debug('Breaking id into an observable of strings...');
    return from(id.split(''));
  }
}
