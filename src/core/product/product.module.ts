import { Module } from '@nestjs/common';

import { ProductController } from './controllers/product.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from './models/product.model';
import { DbCollectionNamesEnum } from '../../utils/enums/db-collection-names.enum';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: DbCollectionNamesEnum.Product,
        },
      },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
