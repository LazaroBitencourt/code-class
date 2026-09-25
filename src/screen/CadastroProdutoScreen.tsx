import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/CustomInputComponents';
import { Navigation } from '../navigation/AppNavigator';
import { formStyles } from '../styles/FormStyles';

type Props = { navigation: Navigation };

export default function CadastroProdutoScreen({ navigation }: Props) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroDescricao, setErroDescricao] = useState('');
  const [erroCategoria, setErroCategoria] = useState('');
  const [erroPreco, setErroPreco] = useState('');
  const [erroQuantidade, setErroQuantidade] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const obrigatorio = (valor: string, campo: string) => valor.trim() ? '' : `Informe ${campo}.`;

  const validarPreco = (valor: string) => {
    if (!valor.trim()) return 'Informe o preço do produto.';
    const numero = Number(valor.replace(',', '.'));
    if (!Number.isFinite(numero) || numero <= 0) return 'Informe um preço válido maior que zero.';
    return '';
  };

  const validarQuantidade = (valor: string) => {
    if (!valor.trim()) return 'Informe a quantidade.';
    const numero = Number(valor);
    if (!Number.isInteger(numero) || numero <= 0) return 'A quantidade deve ser maior que zero.';
    return '';
  };

  const validarTudo = () => {
    const erros = {
      nome: obrigatorio(nome, 'o nome do produto'),
      descricao: obrigatorio(descricao, 'a descrição do produto'),
      categoria: obrigatorio(categoria, 'a categoria'),
      preco: validarPreco(preco),
      quantidade: validarQuantidade(quantidade),
    };
    setErroNome(erros.nome);
    setErroDescricao(erros.descricao);
    setErroCategoria(erros.categoria);
    setErroPreco(erros.preco);
    setErroQuantidade(erros.quantidade);
    return !Object.values(erros).some(Boolean);
  };

  const formularioValido =
    !obrigatorio(nome, 'o nome do produto') &&
    !obrigatorio(descricao, 'a descrição do produto') &&
    !obrigatorio(categoria, 'a categoria') &&
    !validarPreco(preco) &&
    !validarQuantidade(quantidade);

  const cadastrar = () => {
    if (!validarTudo()) return;
    setMensagemSucesso('Produto cadastrado com sucesso.');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 800);
  };

  return (
    <KeyboardAvoidingView style={formStyles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={formStyles.container} contentContainerStyle={formStyles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={formStyles.header}>
          <Text style={formStyles.title}>Cadastro de Produto</Text>
          <Text style={formStyles.subtitle}>Preencha todos os campos obrigatórios.</Text>
        </View>

        <View style={formStyles.formCard}>
          <CustomInput label="Nome do produto" value={nome} onChangeText={(v) => { setNome(v); if (erroNome) setErroNome(obrigatorio(v, 'o nome do produto')); }} onBlur={() => setErroNome(obrigatorio(nome, 'o nome do produto'))} placeholder="Digite o nome do produto" error={erroNome} />
          <CustomInput label="Descrição" value={descricao} onChangeText={(v) => { setDescricao(v); if (erroDescricao) setErroDescricao(obrigatorio(v, 'a descrição do produto')); }} onBlur={() => setErroDescricao(obrigatorio(descricao, 'a descrição do produto'))} placeholder="Digite uma descrição do produto" multiline numberOfLines={4} textAlignVertical="top" inputStyle="textarea" error={erroDescricao} />
          <CustomInput label="Categoria" value={categoria} onChangeText={(v) => { setCategoria(v); if (erroCategoria) setErroCategoria(obrigatorio(v, 'a categoria')); }} onBlur={() => setErroCategoria(obrigatorio(categoria, 'a categoria'))} placeholder="Ex.: Informática" error={erroCategoria} />
          <CustomInput label="Preço" value={preco} onChangeText={(v) => { const filtrado = v.replace(/[^0-9,\.]/g, ''); setPreco(filtrado); if (erroPreco) setErroPreco(validarPreco(filtrado)); }} onBlur={() => setErroPreco(validarPreco(preco))} placeholder="Ex.: 29,90" keyboardType="decimal-pad" error={erroPreco} />
          <CustomInput label="Quantidade" value={quantidade} onChangeText={(v) => { const filtrado = v.replace(/[^0-9]/g, ''); setQuantidade(filtrado); if (erroQuantidade) setErroQuantidade(validarQuantidade(filtrado)); }} onBlur={() => setErroQuantidade(validarQuantidade(quantidade))} placeholder="Ex.: 10" keyboardType="numeric" error={erroQuantidade} />

          {mensagemSucesso ? <Text style={formStyles.successText}>{mensagemSucesso}</Text> : null}

          <TouchableOpacity style={[formStyles.saveButton, !formularioValido && formStyles.saveButtonDisabled]} disabled={!formularioValido} onPress={cadastrar}>
            <Text style={formStyles.saveButtonText}>CADASTRAR PRODUTO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={formStyles.backButton} onPress={navigation.goBack}>
            <Text style={formStyles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
