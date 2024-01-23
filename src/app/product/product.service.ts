import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOneOrFail({
        where: { id },
      });
      return product;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: CreateProductDto) {
    return await this.productRepository.save(
      this.productRepository.create(data),
    );
  }

  async update(id: string, data: UpdateProductDto) {
    const product = await this.findOne(id);

    if (!product) throw new NotFoundException('Product not found');

    this.productRepository.merge(product, data);

    return await this.productRepository.save(product);
  }

  async deleteById(id: string) {
    const product = await this.findOne(id);

    if (!product) throw new NotFoundException('Product not found');

    return await this.productRepository.softDelete(id);
  }
}
