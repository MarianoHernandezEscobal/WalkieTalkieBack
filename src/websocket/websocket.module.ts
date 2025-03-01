import { Module } from '@nestjs/common';
import { WalkieTalkieService } from './walkie-talkie.service';
import { WalkieTalkieGateway } from './walkie-talkie.gateway';

@Module({
  providers: [WalkieTalkieGateway, WalkieTalkieService],
})
export class WebsocketModule {}
