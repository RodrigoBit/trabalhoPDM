import { FlatList, Text, View } from 'react-native';
import Cabecalho from '../../components/cabecalho';
import { listarEstoque } from '../../controllers/estoque';
import { styles } from './styles';

export default function ControleEstoque() {
  return (
    <View style={styles.container}>
      <FlatList
        data={listarEstoque()}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        ListHeaderComponent={<Cabecalho titulo="Controle de Estoque" icon="warehouse" />}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.detalhes}>
              <Text style={styles.quantidade}>{item.quantidade} unidades</Text>
              <Text style={[styles.status, item.estoqueBaixo && styles.estoqueBaixo]}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
