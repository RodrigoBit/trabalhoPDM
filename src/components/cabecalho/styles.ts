import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    marginLeft: 14,
    flex: 1,
    color: themes.colors.text,
    fontSize: 32,
    fontWeight: '700',
  },
});
