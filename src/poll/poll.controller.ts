import { Controller, Post } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('poll')
export class PollController {
    constructor (
        private readonly pollService : PollService
    ) {};
    @Post("/create")
    createPoll (data : any) {
        return this.pollService.createPoll(data);
    }
}
