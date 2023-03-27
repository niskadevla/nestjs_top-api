import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

import { TopPageModel } from '../models/top-page.model';
import { FindTopPageDto } from '../dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>): Promise<any> {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<any> {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: TopPageModel): Promise<any> {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto): Promise<any> {}
}
