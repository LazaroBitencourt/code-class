# codeClass — Atividade 08

Projeto React Native/Expo adaptado para a Atividade 08.

## Telas

- HomeScreen
- LoginScreen
- CadastroCliente
- CadastroProdutoScreen

## Validações

- E-mail obrigatório e com `@`.
- Senha obrigatória e com no mínimo 6 caracteres.
- Produto: nome, descrição e categoria obrigatórios.
- Produto: preço obrigatório e maior que zero.
- Produto: quantidade obrigatória, numérica e maior que zero.
- Cliente: todos os campos obrigatórios.
- Cliente: e-mail com `@`.
- Cliente: telefone com pelo menos 10 números.
- Erros exibidos abaixo dos campos e borda vermelha.
- Botões principais desabilitados enquanto o formulário for inválido.

## Executar

```bash
npm install
npx expo start
```

A navegação foi organizada em `src/navigation/routes.ts` e `src/navigation/AppNavigator.tsx`, mantendo uma única estrutura de navegação para o aplicativo.
# code-class
