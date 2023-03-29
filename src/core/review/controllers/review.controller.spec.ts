import { Test, TestingModule } from '@nestjs/testing';

import { ReviewController } from './review.controller';
import { ReviewService } from '../services/review.service';
import { reviewServiceMock } from '../../auth/mocks/service-mock';

describe('ReviewController', () => {
  let controller: ReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [
        {
          provide: ReviewService,
          useValue: reviewServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
