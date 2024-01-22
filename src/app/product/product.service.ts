import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
      return await this.productRepository.findOneByOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data) {
    return await this.productRepository.save(
      this.productRepository.create(data),
    );
  }

  async update(id: string, data) {
    const product = await this.findOne(data.id);

    if (!product) throw new NotFoundException('Product not found');

    this.productRepository.merge(product, data);

    return await this.productRepository.save(product);
  }

  async deleteById(id: string) {
    await this.productRepository.findOneByOrFail(id);

    return await this.productRepository.softDelete(id);
  }
}
