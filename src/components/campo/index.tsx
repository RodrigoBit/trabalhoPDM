import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps, ReactNode } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = TextInputProps & {
  label: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
  children?: ReactNode;
};

export default function Campo({ label, icon, children, ...props }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <MaterialIcons name={icon} size={31} color={themes.colors.muted} />
        {children ?? (
          <TextInput {...props} accessibilityLabel={label} placeholderTextColor={themes.colors.muted} style={styles.input} />
        )}
      </View>
    </View>
  );
}
