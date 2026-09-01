import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';
import { themes } from '../../global/themes';

export default function CadastroProduto() {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <View style={styles.content}>
        <View style={styles.header}>
          <MaterialIcons name="inventory" size={65} color={themes.colors.primary} />
          <Text style={styles.title}>Novo Produto</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputRow}>
              <MaterialIcons name="sell" size={31} color={themes.colors.muted} />
              <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do Produto"
                placeholderTextColor={themes.colors.muted}
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Preço</Text>
            <View style={styles.inputRow}>
              <MaterialIcons name="attach-money" size={35} color={themes.colors.muted} />
              <TextInput
                value={preco}
                onChangeText={setPreco}
                placeholder="R$ 0,00"
                placeholderTextColor={themes.colors.muted}
                keyboardType="decimal-pad"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Quantidade de Entrada</Text>
            <View style={styles.inputRow}>
              <MaterialIcons name="inventory-2" size={31} color={themes.colors.muted} />
              <TextInput
                value={quantidade}
                onChangeText={setQuantidade}
                placeholder="0"
                placeholderTextColor={themes.colors.muted}
                keyboardType="number-pad"
                style={styles.input}
              />
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={cadastrarProduto}>
            <Text style={styles.buttonText}>CADASTRAR PRODUTO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
