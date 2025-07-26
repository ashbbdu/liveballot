import { Injectable } from '@nestjs/common';
import { PollRepository } from './poll.repository';
import { OptionsRepository } from 'src/options/options.repository';

@Injectable()
export class PollService {
      constructor(
        private readonly pollRepository: PollRepository,
        // private readonly optionRepository : OptionsRepository
      ) {}

      createPoll  (data : any , req) {
        return this.pollRepository.createPoll(data , req);
      }

     async getAllPolls () {        
        return  this.pollRepository.getAllPolls();
      }

      getPollWithVotes (pollId : any) {
        return this.pollRepository.getPollWithVotes(pollId);
      }
}
