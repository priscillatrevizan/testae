# Testaê - Teste seus conhecimentos, com seu próprio questionário
Este projeto surgiu da necessidade de se "auto-testar", e foi desenvolvido para me auxiliar nos estudos para o programa de formação em programação da Orange Juice e FCamara. 
O Testaê é uma aplicação interativa simples, que apresenta uma série de perguntas e respostas multipla escolha, e em sua versão original, o programei com questões relacionadas aos conceitos e tecnologias frequentemente abordados no programa.

## Funcionalidades

- Apresenta uma série de perguntas de múltipla escolha sobre diversos tópicos.
- Permite aos usuários responderem às perguntas.
- Corrige automaticamente as respostas, fornecendo o resultado ao usuário.
- Indica as respostas corretas para as perguntas respondidas incorretamente.
- Suporta dois modos de visualização: claro e escuro.
- Adaptado para ser utilizado em dispositivos móveis.

## Utilizando Questões existentes

Para utilizar com as questões do último programa de formação de 2023 Orange, mais algumas questões de programação extraídas da internet, acesse a versão online em [Testaê Online](https://testae.vercel.app/).

Se desejar modificar as perguntas para estudar outros tópicos, você pode fazer uma cópia só para você e editar o arquivo `script.js` no campo `const questions`, mantendo o formato:

```javascript
const questions = [
  {
    question: "",
    options: [],
    correctAnswer: "",
  },
  // Adicione mais perguntas no mesmo formato conforme necessário
];
```

## Contribuição

Contribuições são bem-vindas! Se quiser contribuir para o projeto, sinta-se à vontade para abrir um pull request. Certifique-se de discutir as mudanças importantes antes de fazer alterações significativas.

## Licença

Este projeto está sob a licença MIT.
