import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailEhUnico } from "../validacao/emailEhUnico.validator";

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: "O Nome não pode ser vazio." })
  nome: string;

  @IsEmail(undefined, { message: "O e-mail é invalido." })
  @EmailEhUnico({ message: "Já existe um usuario com este e-mail."})
  email: string;

  @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres." })
  senha: string;
}