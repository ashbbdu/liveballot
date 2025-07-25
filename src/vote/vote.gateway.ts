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

let voteCounts = {
  1: 0,
  2: 0,
};

@WebSocketGateway({
  cors: {
    origin: '*', // Allow any origin for testing
  },
})
export class VoteGateway implements OnGatewayConnection, OnGatewayDisconnect {
constructor (private readonly voteService : VoteService) {}
  @WebSocketServer()
  server: Server;
  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('vote')
  handleVote(@MessageBody() body: any) {
    console.log('Received vote from client:', body);
    // I need pollId and optionId
    const option = body.option;
    // Now broadcast this vote to all clients
    // voteCounts[option] = (voteCounts[option] || 0) + 1;
    this.voteService.castVote(option);
    this.server.emit('voteUpdate', {
      counts: voteCounts,
    });
  }


  @SubscribeMessage('chat')
  handleChat(@MessageBody() body: any) {
    console.log('Received chat from client:', body);

    this.server.emit('updateChat', {
        msg : body.option,
        user : "Ashish"
    });
  }
}
