import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

import { ReviewModel } from '../models/review.model';
import { CreateReviewDto } from '../dto/create-review.dto';
import { IDeleteResponse } from '../../../utils/interfaces/common.interfaces';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create<CreateReviewDto>(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel.find({ productId }).exec();
  }

  async deleteByProductId(productId: string): Promise<DocumentType<IDeleteResponse>> {
    return this.reviewModel.deleteMany({ productId }).exec();
  }
}
