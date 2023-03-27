import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ReviewController } from './controllers/review.controller';
import { ReviewModel } from './models/review.model';
import { DbCollectionNamesEnum } from '../../utils/enums/db-collection-names.enum';
import { ReviewService } from './services/review.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: DbCollectionNamesEnum.Review,
        },
      },
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
