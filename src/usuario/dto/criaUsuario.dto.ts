import { IsEmail, MinLength, IsNotEmpty } from "class-validator";


export class CriaUsuarioDTO {

  @IsNotEmpty({ message: "O Nome não pode ser vazio."})
  nome: string;

  @IsEmail(undefined, {message: "O e-mail é invalido."})
  email: string;

  @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres."})
  senha: string;
}