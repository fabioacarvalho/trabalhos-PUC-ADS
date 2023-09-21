# Trabalho de Tecnologias para Desenvolvimento Web - PUCPR

## Projeto de Cadastros com React, Vite, TypeScript e Firebase

Este repositório contém o código fonte e a documentação para o projeto desenvolvido como parte da disciplina de Tecnologias para Desenvolvimento Web na PUCPR. O objetivo deste projeto é criar um sistema de cadastros utilizando tecnologias modernas para o desenvolvimento web, incluindo React, Vite, TypeScript e Firebase.

## Visão Geral

O projeto consiste em uma aplicação web que permite aos usuários realizar operações de cadastro, como adicionar, editar, visualizar e excluir registros. A aplicação é construída com as seguintes tecnologias principais:

- **React**: Uma biblioteca JavaScript popular para a criação de interfaces de usuário interativas.
- **Vite**: Um ambiente de desenvolvimento rápido para aplicações web com foco em performance.
- **TypeScript**: Uma linguagem de programação tipada que melhora a robustez e a manutenibilidade do código.
- **Firebase**: Uma plataforma de desenvolvimento de aplicativos que fornece recursos de autenticação, armazenamento em nuvem e banco de dados em tempo real.

## Funcionalidades Principais

A aplicação possui as seguintes funcionalidades principais:

1. **Cadastro de Registros**: Os usuários podem adicionar novos registros preenchendo um formulário com informações relevantes.

2. **Autenticação de Usuário**: A autenticação de usuário é implementada para garantir que apenas usuários autorizados possam acessar e gerenciar os registros.

3. **Visualização de Registros**: Os registros podem ser visualizados em uma lista, facilitando a busca e navegação.


## Configuração do Projeto

Para configurar e executar o projeto em sua máquina local, siga as etapas abaixo:

1. Clone este repositório para sua máquina:

```bash
git clone https://github.com/fabioacarvalho/trabalhos-PUC-ADS.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Configure as credenciais do Firebase:
   
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Copie as credenciais do projeto (apiKey, authDomain, projectId, etc.) e coloque-as no arquivo `src/firebaseConfig.ts`.
   
5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra seu navegador e acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Usando o Docker

Caso possua o Docker instalado basta seguir os passos a seguir para subir a aplicação:

```bash
docker build -t somativa2 .
```
<br>

```bash
docker run -p 5173:5173 -d somativa2
```

## Contribuição

Este projeto foi desenvolvido como parte de um trabalho acadêmico. Se você deseja contribuir ou sugerir melhorias, fique à vontade para criar pull requests ou abrir issues neste repositório.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [MIT](LICENSE) para obter mais detalhes.

---

**Desenvolvido por [Fábio Carvalho](https://github.com/fabioacarvalho)**

Agradecemos por visitar este repositório e esperamos que este projeto seja útil para seus estudos e aprendizado em tecnologias web. Se tiver alguma dúvida ou problema, sinta-se à vontade para entrar em contato.
