import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Cabecalho from '../../components/cabecalho';
import Campo from '../../components/campo';
import { motivosRetirada, MotivoRetirada } from '../../models/produto';
import { themes } from '../../global/themes';
import { styles } from './styles';

export default function SaidaProduto() {
  const [motivo, setMotivo] = useState<MotivoRetirada>('Venda');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Cabecalho titulo="Saída de Produto" icon="output" />
        <View style={styles.form}>
          <Campo label="Nome" icon="sell" placeholder="Nome do Produto" />
          <Campo label="Quantidade de Saída" icon="inventory-2" placeholder="0" keyboardType="number-pad" />
          <Campo label="Motivo da Retirada" icon="list-alt">
            <Picker
              accessibilityLabel="Motivo da Retirada"
              selectedValue={motivo}
              onValueChange={setMotivo}
              mode="dropdown"
              style={styles.picker}
              itemStyle={styles.pickerItem}
              dropdownIconColor={themes.colors.muted}
            >
              {motivosRetirada.map((item) => <Picker.Item key={item} label={item} value={item} />)}
            </Picker>
          </Campo>
          <TouchableOpacity activeOpacity={0.85} style={styles.button} accessibilityRole="button">
            <Text style={styles.buttonText}>REGISTRAR SAÍDA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
