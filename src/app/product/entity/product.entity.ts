import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ width: 60, nullable: false, unique: true })
  code: string;

  @Column({ width: 120, nullable: false })
  description: string;

  @Column({ name: 'sale_packaging', nullable: false })
  salePackaging: string;

  @Column({ name: 'quantity_packaging', nullable: true })
  quantityPackaging: number;

  @Column({ name: 'cost_price', nullable: true })
  costPrice: number;

  @Column({ nullable: true })
  markup: number;

  @Column({ name: 'sale_price', nullable: true })
  salePrice: number;

  @Column({ name: 'profit_margin', nullable: true })
  profitMargin: number;

  @Column({ name: 'bar_code', nullable: true })
  barCode: string;

  @Column({ name: 'current_inventory', nullable: true })
  currentInventory: number;

  @Column({ name: 'minimum_inventory', nullable: true })
  minimumInventory: number;

  @Column({ type: 'date', nullable: true })
  validity: string;

  @Column({ nullable: true })
  commission: number;

  @Column({ name: 'gross_weight', nullable: true })
  grossWeight: number;

  @Column({ name: 'net_weight', nullable: true })
  netWeight: number;

  @Column({ nullable: true })
  length: number;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  brand: string;

  @Column({ name: 'image_url', nullable: true })
  imageUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @Column({ name: 'deleted_by', nullable: true })
  deletedBy: string;
}
