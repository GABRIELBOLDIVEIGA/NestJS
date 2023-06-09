import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario)
    console.log(this.usuarios)
  }

  async listarUsuarios() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuarios = this.usuarios.find(usuario => usuario.email === email);

    return possivelUsuarios != undefined;
  }
}