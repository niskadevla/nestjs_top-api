import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from 'nestjs-typegoose';
import { Types } from 'mongoose';

import { ReviewService } from './review.service';
import { reviewModelMock } from '../mocks/mocks';

describe('ReviewService', () => {
  let service: ReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('ReviewModel'),
          useValue: reviewModelMock,
        },
        ReviewService,
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByProductId should return value', async () => {
    const id = new Types.ObjectId().toHexString();
    reviewModelMock.find().exec.mockReturnValue([{ productId: id }]);

    const res = await service.findByProductId(id);

    expect(res[0].productId).toBe(id);
  });
});
