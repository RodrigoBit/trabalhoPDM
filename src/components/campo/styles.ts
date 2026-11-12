import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  field: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 60,
    zIndex: 1,
    paddingHorizontal: 8,
    backgroundColor: themes.colors.background,
    color: themes.colors.primary,
    fontSize: 16,
  },
  inputRow: {
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: themes.colors.inputBorder,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    minWidth: 0,
    height: '100%',
    marginLeft: 18,
    color: themes.colors.text,
    fontSize: 22,
  },
});
