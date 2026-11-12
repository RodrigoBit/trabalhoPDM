import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = {
  titulo: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
};

export default function Cabecalho({ titulo, icon }: Props) {
  return (
    <View style={styles.header}>
      <MaterialIcons name={icon} size={56} color={themes.colors.primary} />
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
}
