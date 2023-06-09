import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository]
})
export class UsuarioModule {}