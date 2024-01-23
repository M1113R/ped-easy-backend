import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(60, {
    message: 'O código deve ter menos de 60 caracteres',
  })
  code: string;

  @IsNotEmpty()
  @MaxLength(120, {
    message: 'O nome deve ter menos de 120 caracteres',
  })
  description: string;

  @IsNotEmpty()
  salePackaging: string;
}
