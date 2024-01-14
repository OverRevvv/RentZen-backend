import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'work in progress, this endpoint will serve the client app';
  }
}
