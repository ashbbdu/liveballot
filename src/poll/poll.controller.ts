import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { PollService } from './poll.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('poll')
export class PollController {
    constructor (
        private readonly pollService : PollService
    ) {};
    @Post("/create")
    createPoll (@Body () data : any , @Request() req : Request) {
        return this.pollService.createPoll(data , req);
    }

    @Get("/list")
    getPoll () {
        return this.pollService.getAllPolls();
    }
}
