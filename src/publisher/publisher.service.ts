import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class PublisherService {
  private readonly logger = new Logger();
  private readonly mockUserDTOs: UserDTO[] = [
    {
      id: 1,
      name: 'Arnold',
    },
    {
      id: 2,
      name: 'Silvester',
    },
    {
      id: 3,
      name: 'Jean Claude',
    },
  ];

  findByUsername(username: string): UserDTO {
    this.logger.debug(username);
    return this.mockUserDTOs.find(({ name }) => name === username);
  }
}
