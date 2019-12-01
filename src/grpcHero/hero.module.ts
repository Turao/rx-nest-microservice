import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [],
  controllers: [HeroController, HeroService],
  providers: [],
})
export class HeroModule {}
