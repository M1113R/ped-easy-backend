import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async index() {
    return await this.productService.findAll();
  }

  @Post()
  async create(@Body() body) {
    return this.productService.create(body);
  }

  //localhost:3000/api/v1/products/uuid
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.productService.findOne(id);
  }

  @Put()
  async update(@Param('id') id: string, @Body() body) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.productService.deleteById(id);
  }
}
