import { ReviewService } from '../../review/services/review.service';

export const reviewServiceMock: ReviewService = {
  create: jest.fn(),
  delete: jest.fn(),
} as unknown as ReviewService;
