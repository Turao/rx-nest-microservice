import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, 'proto/hero.proto'),
  },
};
