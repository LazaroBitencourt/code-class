import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  content: { padding: 24, paddingTop: 56, paddingBottom: 40 },
  header: { marginBottom: 24 },
  eyebrow: { fontSize: 12, fontWeight: '800', color: '#2563EB', letterSpacing: 1.5, marginBottom: 8 },
  title: { fontSize: 30, fontWeight: '800', color: '#111827' },
  subtitle: { marginTop: 8, fontSize: 15, lineHeight: 22, color: '#6B7280' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, borderWidth: 1, borderColor: '#E5E7EB' },
  cardTitle: { fontSize: 20, fontWeight: '700', color: '#111827' },
  cardText: { marginTop: 6, marginBottom: 18, fontSize: 14, lineHeight: 20, color: '#6B7280' },
  primaryButton: { height: 52, borderRadius: 12, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  secondaryButton: { height: 52, borderRadius: 12, backgroundColor: '#EFF6FF', alignItems: 'center', justifyContent: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#BFDBFE' },
  secondaryButtonText: { color: '#1D4ED8', fontSize: 14, fontWeight: '800' },
});
