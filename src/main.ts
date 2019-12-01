import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  logger.debug('Starting microservices...');
  await app.startAllMicroservicesAsync();
  logger.debug('Microservices started');

  await app.listen(3000);
  logger.debug('Listening on port: ' + 3000);
}
bootstrap();
