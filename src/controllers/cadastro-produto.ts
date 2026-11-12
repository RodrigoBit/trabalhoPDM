import { useState } from 'react';
import { Alert } from 'react-native';

export function useCadastroProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function cadastrarProduto() {
    if (!nome.trim() || !preco.trim() || !quantidade.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos para continuar.');
      return;
    }

    Alert.alert('Produto cadastrado', `${nome} foi adicionado ao estoque.`);
    setNome('');
    setPreco('');
    setQuantidade('');
  }


  return { nome, setNome, preco, setPreco, quantidade, setQuantidade, cadastrarProduto };
}
