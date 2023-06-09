import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioEntity {
  id: string;
  nome: string;
  email: string;
  senha: string;
}