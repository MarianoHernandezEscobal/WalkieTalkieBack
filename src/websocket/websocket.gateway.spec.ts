import { Test, TestingModule } from '@nestjs/testing';
import { WalkieTalkieGateway } from './walkie-talkie.gateway';
import { WalkieTalkieService } from './walkie-talkie.service';

describe('WebsocketGateway', () => {
  let gateway: WalkieTalkieGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalkieTalkieGateway, WalkieTalkieService],
    }).compile();

    gateway = module.get<WalkieTalkieGateway>(WalkieTalkieGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
