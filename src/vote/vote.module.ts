import { Module } from "@nestjs/common";
import { VoteGateway } from "./vote.gateway";
import { SequelizeModule } from "@nestjs/sequelize";
import { Vote } from "./vote.entity";
import { VoteService } from "./vote.service";

@Module({
    imports : [SequelizeModule.forFeature([Vote])],
    providers : [VoteGateway, VoteService]

})
export class VoteMoudle {
    
}