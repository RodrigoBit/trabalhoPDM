import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: themes.colors.background },
  content: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 32 },
  produto: { padding: 18, borderWidth: 1.5, borderColor: themes.colors.inputBorder, borderRadius: 10, marginBottom: 16 },
  nome: { color: themes.colors.text, fontSize: 22, fontWeight: '600', marginBottom: 12 },
  detalhes: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  quantidade: { color: themes.colors.muted, fontSize: 16 },
  status: { color: themes.colors.primary, fontSize: 14, fontWeight: '600' },
  estoqueBaixo: { color: '#9B5400' },
});
