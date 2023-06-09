
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, Min, ValidateNested } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: "Nome do produto não pode ser vazio." })
  nome: string;

  @IsNotEmpty({ message: "Descrição do produto não pode ser vazio." })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsUrl(undefined, { message: 'URL para imagem inválida' })
  url: string;

  @IsNotEmpty({ message: "Descrição não pode ser vazio." })
  @MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres',
  })
  descricao: string;
}

export class CriaProdutoDTO {
  @IsNotEmpty({ message: "Nome não pode ser vazio." })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: "Descrição não pode ser vazio." })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;

  // @IsDate()
  // dataCriacao: Date;

  // @IsDate()
  // dataAtualizacao: Date;

  @IsNotEmpty()
  dataCriacao: string;

  @IsNotEmpty()
  dataAtualizacao: string;
}

