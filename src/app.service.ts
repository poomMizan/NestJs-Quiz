import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello AAA';
  }

  getSomething(): string {
    return 'Something are sent back!';
  }
}
