import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class PublisherService {
  private readonly logger = new Logger();
}
