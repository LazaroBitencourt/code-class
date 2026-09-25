import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

type CustomInputProps = TextInputProps & {
  label: string;
  error?: string;
  inputStyle?: 'textarea';
};

export default function CustomInput({ label, error, inputStyle, style, ...rest }: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle === 'textarea' && styles.textarea, error ? styles.inputError : null, style]}
        placeholderTextColor="#9CA3AF"
        {...rest}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 },
  input: { minHeight: 50, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: '#111827' },
  textarea: { minHeight: 105 },
  inputError: { borderColor: '#DC2626', backgroundColor: '#FEF2F2' },
  errorText: { marginTop: 5, fontSize: 12, color: '#DC2626' },
});
