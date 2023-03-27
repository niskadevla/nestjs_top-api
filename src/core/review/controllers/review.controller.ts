import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose/lib/types';

import { CreateReviewDto } from '../dto/create-review.dto';
import { ReviewService } from '../services/review.service';
import { ReviewModel } from '../models/review.model';
import { ErrorMessages } from '../constants/error-messages.consts';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const deletedDoc = await this.reviewService.delete(id);

    if (!deletedDoc) {
      throw new HttpException(ErrorMessages.reviewNotFound, HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewService.findByProductId(productId);
  }
}
