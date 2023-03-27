import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

import { AuthModule } from './core/auth/auth.module';
import { TopPageModule } from './core/top-page/top-page.module';
import { ProductModule } from './core/product/product.module';
import { ReviewModule } from './core/review/review.module';
import { getMongoConfig } from '../configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
  ],
})
export class AppModule {}
