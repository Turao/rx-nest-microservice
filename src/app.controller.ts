import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/arnold')
  doSomething(): Observable<string> {
    return this.appService.getHello();
  }

  @EventPattern('arnold.say')
  arnold(): Observable<string> {
    return this.appService.getHello();
  }
}
