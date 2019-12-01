import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { HeroModule } from './grpcHero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
