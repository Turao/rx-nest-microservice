import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherModule } from './publisher/publisher.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [PublisherModule, ConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
