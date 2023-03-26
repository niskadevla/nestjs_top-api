import { Module } from '@nestjs/common';
import { ReviewController } from './controllers/review.controller';

@Module({
  controllers: [ReviewController],
})
export class ReviewModule {}
