import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { clientOptions as heroClientOptions } from './grpcHero/hero.client';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(heroClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
