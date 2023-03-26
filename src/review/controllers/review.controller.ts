import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from '../models/review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<any> {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {}

  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string): Promise<any> {}
}
