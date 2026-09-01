import { StyleSheet } from 'react-native';

import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 34,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    marginLeft: 14,
    color: themes.colors.text,
    fontSize: 38,
    fontWeight: '700',
  },
  form: {
    gap: 30,
  },
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
    height: '100%',
    marginLeft: 18,
    color: themes.colors.text,
    fontSize: 22,
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
