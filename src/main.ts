import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ConsumerModule } from './consumer/consumer.module';
import { GithubModule } from './github/github.module';
const logger = new Logger();

async function bootstrap() {
  logger.debug('Starting consumer microservice...');
  const consumerMicroservice = await NestFactory.createMicroservice(
    ConsumerModule,
    { transport: Transport.RMQ },
  );
  await consumerMicroservice.listenAsync();
  logger.debug('Consumer microservice started');

  logger.debug('Starting github hybrid application...');
  const github = await NestFactory.create(GithubModule);
  await github.connectMicroservice({ transport: Transport.RMQ });
  logger.debug('Github hybrid application started');
  await github.listen(3000);
  logger.debug('Listening on port: ' + 3000);
}
bootstrap();
