import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  logoArea: { marginBottom: 28 },
  title: { fontSize: 30, fontWeight: '800', color: '#111827' },
  subtitle: { marginTop: 8, fontSize: 15, color: '#6B7280', lineHeight: 22 },
  form: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, borderWidth: 1, borderColor: '#E5E7EB' },
  loginButton: { height: 52, borderRadius: 12, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginTop: 6 },
  loginButtonDisabled: { backgroundColor: '#9CA3AF' },
  loginButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  backButton: { alignItems: 'center', justifyContent: 'center', height: 44, marginTop: 8 },
  backButtonText: { color: '#2563EB', fontSize: 14, fontWeight: '600' },
  successText: { color: '#15803D', backgroundColor: '#F0FDF4', borderRadius: 10, padding: 10, marginBottom: 10, fontSize: 13 },
  erroLoginText: { color: '#DC2626', backgroundColor: '#FEF2F2', borderRadius: 10, padding: 10, marginBottom: 10, fontSize: 13 },
});
