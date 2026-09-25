import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from '../navigation/AppNavigator';
import { homeStyles } from '../styles/HomeStyles';

type Props = { navigation: Navigation };

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={homeStyles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={homeStyles.content} keyboardShouldPersistTaps="handled">
        <View style={homeStyles.header}>
          <Text style={homeStyles.eyebrow}>CODECLASSE</Text>
          <Text style={homeStyles.title}>codeClass</Text>
          <Text style={homeStyles.subtitle}>
            Acesse as telas da Atividade 08.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Navegação</Text>
          <Text style={homeStyles.cardText}>
            Escolha uma das opções abaixo para continuar.
          </Text>

          <TouchableOpacity style={homeStyles.primaryButton} onPress={() => navigation.navigate('Login')}>
            <Text style={homeStyles.primaryButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.secondaryButton} onPress={() => navigation.navigate('CadastroCliente')}>
            <Text style={homeStyles.secondaryButtonText}>CADASTRO DE CLIENTE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.secondaryButton} onPress={() => navigation.navigate('CadastroProduto')}>
            <Text style={homeStyles.secondaryButtonText}>CADASTRO DE PRODUTO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
