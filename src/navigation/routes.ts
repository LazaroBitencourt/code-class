export type RouteName =
  | 'Home'
  | 'Login'
  | 'CadastroCliente'
  | 'CadastroProduto';

export const routes = {
  Home: 'Home',
  Login: 'Login',
  CadastroCliente: 'CadastroCliente',
  CadastroProduto: 'CadastroProduto',
} as const;
