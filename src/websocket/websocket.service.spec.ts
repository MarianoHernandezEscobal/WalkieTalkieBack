import { Test, TestingModule } from '@nestjs/testing';
import { WalkieTalkieService } from './walkie-talkie.service';

describe('WebsocketService', () => {
  let service: WalkieTalkieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalkieTalkieService],
    }).compile();

    service = module.get<WalkieTalkieService>(WalkieTalkieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
