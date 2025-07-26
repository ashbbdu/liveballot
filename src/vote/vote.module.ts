import { Module } from "@nestjs/common";
import { VoteGateway } from "./vote.gateway";
import { SequelizeModule } from "@nestjs/sequelize";
import { Vote } from "./vote.entity";
import { VoteService } from "./vote.service";
import { VoteRepository } from "./vote.repository";
import { Poll } from "src/poll/poll.entitiy";
import { PollRepository } from "src/poll/poll.repository";

@Module({
    imports : [SequelizeModule.forFeature([Vote , Poll])],
    providers : [VoteGateway, VoteService , VoteRepository]

})
export class VoteModule {
    
}