import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

import { ProductModel } from '../models/product.model';
import { FindProductDto } from '../dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>): Promise<any> {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<any> {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ProductModel): Promise<any> {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto): Promise<any> {}
}
