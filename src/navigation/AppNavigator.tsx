import React, { useState } from 'react';
import { RouteName } from './routes';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import CadastroCliente from '../screen/CadastroCliente';
import CadastroProdutoScreen from '../screen/CadastroProdutoScreen';

export type Navigation = {
  navigate: (route: RouteName) => void;
  goBack: () => void;
};

export default function AppNavigator() {
  const [currentRoute, setCurrentRoute] = useState<RouteName>('Home');
  const [history, setHistory] = useState<RouteName[]>([]);

  const navigate = (route: RouteName) => {
    setHistory((previous) => [...previous, currentRoute]);
    setCurrentRoute(route);
  };

  const goBack = () => {
    setHistory((previous) => {
      if (previous.length === 0) {
        setCurrentRoute('Home');
        return previous;
      }

      const nextHistory = [...previous];
      const previousRoute = nextHistory.pop() as RouteName;
      setCurrentRoute(previousRoute);
      return nextHistory;
    });
  };

  const navigation: Navigation = { navigate, goBack };

  switch (currentRoute) {
    case 'Login':
      return <LoginScreen navigation={navigation} />;
    case 'CadastroCliente':
      return <CadastroCliente navigation={navigation} />;
    case 'CadastroProduto':
      return <CadastroProdutoScreen navigation={navigation} />;
    case 'Home':
    default:
      return <HomeScreen navigation={navigation} />;
  }
}
