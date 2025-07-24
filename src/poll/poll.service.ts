import { Injectable } from '@nestjs/common';
import { PollRepository } from './poll.repository';

@Injectable()
export class PollService {
      constructor(
        private readonly pollRepository: PollRepository,
      ) {}

      createPoll  (data : any , req) {
        return this.pollRepository.createPoll(data , req);
      }
}
