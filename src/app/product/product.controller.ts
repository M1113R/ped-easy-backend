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
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async index() {
    return await this.productService.findAll();
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  //localhost:3000/api/v1/products/uuid
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.productService.findOne(id);
  }

  @Put()
  async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.productService.deleteById(id);
  }
}
