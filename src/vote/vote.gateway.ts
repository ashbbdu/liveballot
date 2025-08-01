import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';
import { VoteService } from './vote.service';


@WebSocketGateway({
  cors: {
    origin: '*', // Allow any origin for testing
  },
})
export class VoteGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly voteService: VoteService) {}
  @WebSocketServer()
  server: Server;
  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  //   @SubscribeMessage('vote')
  //   handleVote(@MessageBody() body: any) {
  //     console.log('Received vote from client:', body);
  //     // I need pollId and optionId
  //     const option = body.option;
  //     // Now broadcast this vote to all clients
  //     // voteCounts[option] = (voteCounts[option] || 0) + 1;
  //     this.voteService.castVote(option);
  //     this.server.emit('voteUpdate', {
  //       counts: voteCounts,
  //     });
  //   }

  @SubscribeMessage('vote')
  async handleVote(@MessageBody() body: any) {
    // console.log(body ,"body");
    
    // console.log('Received vote from client:', body.option);

    try {
      const savedVote = await this.voteService.castVote(body.option);
      this.server.emit('voteUpdate', {
        message: 'Vote successfully recorded', 
        totalVotes : savedVote.totalVotes , 
        pollId: savedVote.pollId,
        optionId: savedVote.optionId,
        optionVoteCount : savedVote.optionVoteCount,
        totalPollVotes : savedVote.totalVotes,
       
      });
    } catch (err) {
      console.error('Error saving vote:', err);
      this.server.emit('voteUpdate', {
        message: 'Failed to record vote',
        error: err.message,
      });
    }
  }

  @SubscribeMessage('chat')
  handleChat(@MessageBody() body: any) {
    console.log('Received chat from client:', body);

    this.server.emit('updateChat', {
      msg: body.option,
      user: 'Ashish',
    });
  }
}
