import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/criaProduto.dto';

@Controller('/produto')
export class ProdutoController {

  constructor(private produtoRepository: ProdutoRepository){}

  @Post()
  async criarProduto(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoRepository.salvar(dadosProduto)
    return dadosProduto
  }

  @Get()
  async listProdutos() {
    return this.produtoRepository.listarProdutos();
  }
}