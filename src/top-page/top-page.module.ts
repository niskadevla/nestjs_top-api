import { Module } from '@nestjs/common';
import { TopPageController } from './controllers/top-page.controller';

@Module({
  controllers: [TopPageController],
})
export class TopPageModule {}
