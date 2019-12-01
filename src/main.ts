import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ConsumerModule } from './consumer/consumer.module';
import { PublisherModule } from './publisher/publisher.module';
const logger = new Logger();

async function bootstrap() {
  logger.debug('Starting consumer microservice...');
  const consumerMicroservice = await NestFactory.createMicroservice(
    ConsumerModule,
    { transport: Transport.RMQ },
  );
  await consumerMicroservice.listenAsync();
  logger.debug('Consumer microservice started');

  logger.debug('Starting publisher hybrid application...');
  const publisher = await NestFactory.create(PublisherModule);
  await publisher.connectMicroservice({ transport: Transport.RMQ });
  logger.debug('Publisher hybrid application started');
  await publisher.listen(3000);
  logger.debug('Listening on port: ' + 3000);
}
bootstrap();
