import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailEhUnico } from "../validacao/emailEhUnico.validator";

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: "O Nome não pode ser vazio." })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: "O e-mail é invalido." })
  @EmailEhUnico({ message: "Já existe um usuario com este e-mail." })
  @IsOptional()
  email: string;

  @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres." })
  @IsOptional()
  senha: string;
}