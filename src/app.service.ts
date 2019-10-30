import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Logger } from '@nestjs/common';
const logger = new Logger();

@Injectable()
export class AppService {
  getHello(): Observable<string> {
    const sayings = ['get', 'to', 'the', 'chopper'];
    return from(sayings).pipe(tap((saying: string) => logger.log(saying)));
  }
}
