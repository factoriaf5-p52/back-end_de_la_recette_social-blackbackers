import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipiesService {
    findAllRecipies(): any {
        return `hola mundo`;
  }
}
