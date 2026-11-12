# Controle de Estoque

Trabalho de PDM com React Native, Expo e TypeScript.

Telas: Novo Produto, Saída de Produto e Controle de Estoque. A saída possui os motivos Venda, Avarias e Uso Interno. O estoque usa dados de exemplo e considera baixo o estoque com até 5 unidades. Os formulários não persistem alterações, conforme permitido na atividade.

Para executar:

```sh
npm install
npm start
```

Abra no Expo Go usando o QR code. Também é possível usar `npm run android` com um emulador configurado ou `npm run web` no navegador.

Organização:

- `src/models`: modelo e dados dos produtos.
- `src/controllers`: lógica de cadastro e consulta do estoque.
- `src/components`: campos e cabeçalho compartilhados.
- `src/pages`: telas e estilos.
- `src/routes`: Stack principal e Bottom Tabs.
- `src/global/themes`: cores do aplicativo.

O Stack contém a navegação principal por abas. Cada aba exibe seu próprio título e ícone, com destaque azul quando selecionada.

Repositório: https://github.com/RodrigoBit/trabalhoPDM

Capturas: [arquivo PDF](docs/telas.pdf). Foram feitas com o aplicativo web em viewport de celular (390 × 844). Para atender literalmente à entrega.

Validação: `npx tsc --noEmit` e `npx expo export --platform all`.
