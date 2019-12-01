import { Logger, Controller, Get } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { HeroById } from './interfaces/heroById.interface';
import { Hero } from './interfaces/hero.interface';
import { Observable, from } from 'rxjs';

const logger = new Logger();

@Controller('service')
export class HeroService {
  private readonly heroes: Hero[] = [
    { id: 1, name: 'Arnold' },
    { id: 2, name: 'Silvester' },
    { id: 3, name: 'Jean Claude' },
  ];

  @GrpcMethod()
  findOne(data: HeroById, metadata?: any): Hero {
    return this.heroes.find(({ id }) => id === data.id);
  }

  @Get('all') // I can also expose the service through HTTP endpoints WHAAAAT
  @GrpcMethod()
  findAll(metadata?: any): Observable<Hero> {
    return from<Hero[]>(this.heroes);
  }
}
