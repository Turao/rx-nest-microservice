import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class GithubService {
  private readonly logger = new Logger();
}
