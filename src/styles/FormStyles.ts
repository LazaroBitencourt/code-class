import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F3F4F6' },
  container: { flex: 1 },
  scrollContent: { padding: 24, paddingTop: 50, paddingBottom: 40 },
  header: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#111827' },
  subtitle: { marginTop: 7, fontSize: 14, color: '#6B7280' },
  formCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, borderWidth: 1, borderColor: '#E5E7EB' },
  saveButton: { height: 52, borderRadius: 12, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  saveButtonDisabled: { backgroundColor: '#9CA3AF' },
  saveButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  backButton: { height: 44, alignItems: 'center', justifyContent: 'center' },
  backButtonText: { color: '#2563EB', fontSize: 14, fontWeight: '600' },
  successText: { color: '#15803D', backgroundColor: '#F0FDF4', borderRadius: 10, padding: 10, marginBottom: 12, fontSize: 13 },
});
