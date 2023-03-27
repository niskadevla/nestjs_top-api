import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { TopPageController } from './controllers/top-page.controller';
import { TopPageModel } from './models/top-page.model';
import { DbCollectionNamesEnum } from '../../utils/enums/db-collection-names.enum';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: {
          collection: DbCollectionNamesEnum.TopPage,
        },
      },
    ]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}
