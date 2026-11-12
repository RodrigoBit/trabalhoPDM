export type Produto = {
  id: number;
  nome: string;
  quantidade: number;
};

export const produtos: Produto[] = [
  { id: 1, nome: 'Arroz 5 kg', quantidade: 24 },
  { id: 2, nome: 'Feijão 1 kg', quantidade: 4 },
  { id: 3, nome: 'Açúcar 1 kg', quantidade: 18 },
  { id: 4, nome: 'Café 500 g', quantidade: 3 },
  { id: 5, nome: 'Óleo 900 ml', quantidade: 12 },
];

export const motivosRetirada = ['Venda', 'Avarias', 'Uso Interno'] as const;
export type MotivoRetirada = (typeof motivosRetirada)[number];
