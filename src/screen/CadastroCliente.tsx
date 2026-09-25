import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/CustomInputComponents';
import { Navigation } from '../navigation/AppNavigator';
import { clientStyles } from '../styles/ClientStyles';

type Props = { navigation: Navigation };

export default function CadastroCliente({ navigation }: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroEndereco, setErroEndereco] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroCidade, setErroCidade] = useState('');
  const [erroBairro, setErroBairro] = useState('');
  const [erroEstado, setErroEstado] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const obrigatorio = (valor: string, campo: string) => valor.trim() ? '' : `Informe ${campo}.`;
  const validarEmail = (valor: string) => {
    if (!valor.trim()) return 'Informe o e-mail.';
    if (!valor.includes('@')) return 'Digite um e-mail válido.';
    return '';
  };
  const validarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, '');
    if (!numeros) return 'Informe o telefone.';
    if (numeros.length < 10) return 'O telefone deve possuir pelo menos 10 números.';
    return '';
  };

  const validarTudo = () => {
    const erros = {
      nome: obrigatorio(nome, 'o nome'),
      email: validarEmail(email),
      endereco: obrigatorio(endereco, 'o endereço'),
      telefone: validarTelefone(telefone),
      cidade: obrigatorio(cidade, 'a cidade'),
      bairro: obrigatorio(bairro, 'o bairro'),
      estado: obrigatorio(estado, 'o estado'),
    };
    setErroNome(erros.nome); setErroEmail(erros.email); setErroEndereco(erros.endereco);
    setErroTelefone(erros.telefone); setErroCidade(erros.cidade); setErroBairro(erros.bairro); setErroEstado(erros.estado);
    return !Object.values(erros).some(Boolean);
  };

  const formularioValido =
    !obrigatorio(nome, 'o nome') && !validarEmail(email) && !obrigatorio(endereco, 'o endereço') &&
    !validarTelefone(telefone) && !obrigatorio(cidade, 'a cidade') && !obrigatorio(bairro, 'o bairro') && !obrigatorio(estado, 'o estado');

  const cadastrar = () => {
    if (!validarTudo()) return;
    setMensagemSucesso('Cliente cadastrado com sucesso.');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 800);
  };

  return (
    <KeyboardAvoidingView style={clientStyles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={clientStyles.container} contentContainerStyle={clientStyles.content} keyboardShouldPersistTaps="handled">
        <View style={clientStyles.header}>
          <Text style={clientStyles.title}>Cadastro de Cliente</Text>
          <Text style={clientStyles.subtitle}>Informe os dados do cliente.</Text>
        </View>

        <View style={clientStyles.card}>
          <CustomInput label="Nome" value={nome} onChangeText={(v) => { setNome(v); if (erroNome) setErroNome(obrigatorio(v, 'o nome')); }} onBlur={() => setErroNome(obrigatorio(nome, 'o nome'))} placeholder="Digite o nome completo" error={erroNome} />
          <CustomInput label="E-mail" value={email} onChangeText={(v) => { setEmail(v); if (erroEmail) setErroEmail(validarEmail(v)); }} onBlur={() => setErroEmail(validarEmail(email))} placeholder="Digite o e-mail" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} error={erroEmail} />
          <CustomInput label="Endereço" value={endereco} onChangeText={(v) => { setEndereco(v); if (erroEndereco) setErroEndereco(obrigatorio(v, 'o endereço')); }} onBlur={() => setErroEndereco(obrigatorio(endereco, 'o endereço'))} placeholder="Ex.: Rua das Flores, 120" error={erroEndereco} />
          <CustomInput label="Telefone" value={telefone} onChangeText={(v) => { const filtrado = v.replace(/[^0-9()+\-\s]/g, ''); setTelefone(filtrado); if (erroTelefone) setErroTelefone(validarTelefone(filtrado)); }} onBlur={() => setErroTelefone(validarTelefone(telefone))} placeholder="Ex.: (38) 99999-9999" keyboardType="phone-pad" error={erroTelefone} />
          <CustomInput label="Cidade" value={cidade} onChangeText={(v) => { setCidade(v); if (erroCidade) setErroCidade(obrigatorio(v, 'a cidade')); }} onBlur={() => setErroCidade(obrigatorio(cidade, 'a cidade'))} placeholder="Digite a cidade" error={erroCidade} />
          <CustomInput label="Bairro" value={bairro} onChangeText={(v) => { setBairro(v); if (erroBairro) setErroBairro(obrigatorio(v, 'o bairro')); }} onBlur={() => setErroBairro(obrigatorio(bairro, 'o bairro'))} placeholder="Digite o bairro" error={erroBairro} />
          <CustomInput label="Estado" value={estado} onChangeText={(v) => { setEstado(v.toUpperCase()); if (erroEstado) setErroEstado(obrigatorio(v, 'o estado')); }} onBlur={() => setErroEstado(obrigatorio(estado, 'o estado'))} placeholder="Ex.: MG" autoCapitalize="characters" maxLength={2} error={erroEstado} />

          {mensagemSucesso ? <Text style={clientStyles.successText}>{mensagemSucesso}</Text> : null}

          <TouchableOpacity style={[clientStyles.saveButton, !formularioValido && clientStyles.saveButtonDisabled]} disabled={!formularioValido} onPress={cadastrar}>
            <Text style={clientStyles.saveButtonText}>CADASTRAR CLIENTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={clientStyles.backButton} onPress={navigation.goBack}>
            <Text style={clientStyles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
