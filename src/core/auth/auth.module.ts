import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { AuthController } from './controllers/auth.controller';
import { AuthModel } from './models/auth.model';
import { DbCollectionNamesEnum } from '../../utils/enums/db-collection-names.enum';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: DbCollectionNamesEnum.Auth,
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
