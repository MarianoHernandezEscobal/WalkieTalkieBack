import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WalkieTalkieService } from './walkie-talkie.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Permitir todas las conexiones
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
})
export class WalkieTalkieGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly walkieTalkieService: WalkieTalkieService) {}

  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any,
  ): void {
    console.log(`Mensaje recibido de ${client.id}:`, payload);
    this.walkieTalkieService.broadcastMessage(this.server, client.id, payload);
  }

  @SubscribeMessage('sendAudio')
  handleAudio(
    @ConnectedSocket() client: Socket,
    @MessageBody() audioBuffer: ArrayBuffer,
  ): void {
    console.log(
      `Audio recibido de ${client.id}, tamaño: ${audioBuffer.byteLength} bytes`,
    );
    this.walkieTalkieService.broadcastAudio(
      this.server,
      client.id,
      audioBuffer,
    );
  }

  @SubscribeMessage('join')
  handleJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() username: string,
  ): void {
    console.log(`${username} se ha unido con ID: ${client.id}`);
    this.server.emit('userJoined', { id: client.id, username });
  }
}
