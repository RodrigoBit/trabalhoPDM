import { StyleSheet } from 'react-native';

import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  form: {
    gap: 30,
  },
  button: {
    height: 61,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    borderRadius: 5,
    backgroundColor: themes.colors.primary,
    shadowColor: themes.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
