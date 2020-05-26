import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
   const names = 'Francisco Inoque'
    
    return names;
  }
}
