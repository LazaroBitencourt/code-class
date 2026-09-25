import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/CustomInputComponents';
import { Navigation } from '../navigation/AppNavigator';
import { loginStyles } from '../styles/LoginStyles';

type Props = { navigation: Navigation };

const USUARIO_TESTE = {
  email: 'teste@codeclasse.com',
  senha: '123456',
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroLogin, setErroLogin] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const validarEmail = (valor: string) => {
    const emailLimpo = valor.trim();
    if (!emailLimpo) return 'Informe seu e-mail.';
    if (!emailLimpo.includes('@')) return 'Digite um e-mail válido.';
    return '';
  };

  const validarSenha = (valor: string) => {
    if (!valor) return 'Informe sua senha.';
    if (valor.length < 6) return 'A senha deve possuir no mínimo 6 caracteres.';
    return '';
  };

  const validarEmailNoCampo = () => setErroEmail(validarEmail(email));
  const validarSenhaNoCampo = () => setErroSenha(validarSenha(senha));

  const formularioValido = !validarEmail(email) && !validarSenha(senha);

  const entrar = () => {
    const emailErro = validarEmail(email);
    const senhaErro = validarSenha(senha);
    setErroEmail(emailErro);
    setErroSenha(senhaErro);
    setErroLogin('');
    if (emailErro || senhaErro) return;

    const credenciaisValidas =
      email.trim().toLowerCase() === USUARIO_TESTE.email && senha === USUARIO_TESTE.senha;

    if (!credenciaisValidas) {
      setErroLogin('E-mail ou senha incorretos.');
      setMensagemSucesso('');
      return;
    }

    setMensagemSucesso('Login realizado com sucesso.');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 800);
  };

  return (
    <KeyboardAvoidingView style={loginStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={loginStyles.content} keyboardShouldPersistTaps="handled">
        <View style={loginStyles.logoArea}>
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.subtitle}>Entre na sua conta para continuar.</Text>
        </View>

        <View style={loginStyles.form}>
          <CustomInput
            label="E-mail"
            value={email}
            onChangeText={(valor) => {
              setEmail(valor);
              if (erroEmail) setErroEmail(validarEmail(valor));
              setMensagemSucesso('');
            }}
            onBlur={validarEmailNoCampo}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={erroEmail}
            autoComplete="email"
          />

          <CustomInput
            label="Senha"
            value={senha}
            onChangeText={(valor) => {
              setSenha(valor);
              if (erroSenha) setErroSenha(validarSenha(valor));
              setMensagemSucesso('');
            }}
            onBlur={validarSenhaNoCampo}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            error={erroSenha}
            autoComplete="password"
          />

          {erroLogin ? <Text style={loginStyles.erroLoginText}>{erroLogin}</Text> : null}
          {mensagemSucesso ? <Text style={loginStyles.successText}>{mensagemSucesso}</Text> : null}

          <TouchableOpacity
            style={[loginStyles.loginButton, !formularioValido && loginStyles.loginButtonDisabled]}
            disabled={!formularioValido}
            onPress={entrar}
          >
            <Text style={loginStyles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={loginStyles.backButton} onPress={navigation.goBack}>
            <Text style={loginStyles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
