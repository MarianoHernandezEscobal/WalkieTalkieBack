import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class WalkieTalkieService {
  broadcastMessage(server: Server, senderId: string, message: any) {
    server.emit('receiveMessage', { senderId, message });
  }

  broadcastAudio(server: Server, senderId: string, audioBuffer: ArrayBuffer) {
    server.emit('receiveAudio', { senderId, audioBuffer });
  }
}
