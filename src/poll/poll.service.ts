import { Injectable } from '@nestjs/common';
import { PollRepository } from './poll.repository';

@Injectable()
export class PollService {
      constructor(
        private readonly pollRepository: PollRepository,
      ) {}
      
      createPoll  (data : any) {
        const { question , description } = data;
        console.log(question ,  description);
        
      }
}
