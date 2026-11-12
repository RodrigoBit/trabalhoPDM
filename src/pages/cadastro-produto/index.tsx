import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Cabecalho from '../../components/cabecalho';
import Campo from '../../components/campo';
import { useCadastroProduto } from '../../controllers/cadastro-produto';
import { styles } from './styles';

export default function CadastroProduto() {
  const { nome, setNome, preco, setPreco, quantidade, setQuantidade, cadastrarProduto } = useCadastroProduto();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Cabecalho titulo="Novo Produto" icon="inventory" />
        <View style={styles.form}>
          <Campo label="Nome" icon="sell" value={nome} onChangeText={setNome} placeholder="Nome do Produto" />
          <Campo label="Preço" icon="attach-money" value={preco} onChangeText={setPreco} placeholder="R$ 0,00" keyboardType="decimal-pad" />
          <Campo label="Quantidade de Entrada" icon="inventory-2" value={quantidade} onChangeText={setQuantidade} placeholder="0" keyboardType="number-pad" />
          <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={cadastrarProduto} accessibilityRole="button">
            <Text style={styles.buttonText}>CADASTRAR PRODUTO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
