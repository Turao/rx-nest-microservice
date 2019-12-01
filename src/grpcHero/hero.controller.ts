import { Controller, OnModuleInit, Get, Param } from '@nestjs/common';
import { HeroService } from './hero.service';
import {
  Transport,
  ClientGrpc,
  Client,
  ClientOptions,
} from '@nestjs/microservices';

import { Logger } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';
import { clientOptions } from './hero.client';
import { Observable } from 'rxjs';
const logger = new Logger();

@Controller('hero')
export class HeroController implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc;
  private service: HeroService;

  onModuleInit() {
    this.service = this.client.getService<HeroService>('HeroService');
  }

  @Get(':id')
  findOne(@Param('id') id): Hero {
    return this.service.findOne({ id });
  }

  @Get()
  findAll(): Observable<Hero> {
    const heroes = this.service.findAll();
    heroes.subscribe(hero => logger.debug(hero.name));
    return heroes;
  }
}
