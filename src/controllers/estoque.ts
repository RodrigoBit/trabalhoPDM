import { produtos } from '../models/produto';

export function listarEstoque() {
  return produtos.map((produto) => ({
    ...produto,
    estoqueBaixo: produto.quantidade <= 5,
    status: produto.quantidade <= 5 ? 'Estoque Baixo' : 'Em Estoque',
  }));
}
