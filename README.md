# **Projeto Gerador de Frases - Pipeline CI/CD com React, CircleCI e Heroku**

Este projeto é uma aplicação simples em **React** que gera citações aleatórias. Foi desenvolvido com o intuito de demonstrar a criação de um pipeline completo de **CI/CD (Integração Contínua/Entrega Contínua)** usando **CircleCI** para automação de testes e **Heroku** para o deploy contínuo. O projeto foca na integração de tecnologias modernas de desenvolvimento para otimizar o fluxo de trabalho e garantir que o código esteja sempre em produção com qualidade.

## **Índice**
- [Objetivo do Projeto](#objetivo-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Link para Visualização](#link-para-visualização)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Evoluções Possíveis para o Projeto](#evoluções-possíveis-para-o-projeto)
- [Contribuições](#contribuições)
- [Contatos e Network](#contatos-e-network)
- [Licença](#licença)
- [Referências Bibliográficas](#referências-bibliográficas)

## **Objetivo do Projeto**

O objetivo desse repositório é mostrar a construção de uma aplicação simples em React, com o foco em demonstrar o processo de automação do ciclo de vida do desenvolvimento por meio de um pipeline de **CI/CD**. Ele envolve o uso de **CircleCI** para rodar os testes automaticamente a cada push no repositório e **Heroku** para fazer o deploy contínuo da aplicação.

Esse projeto serve como uma excelente base para quem deseja entender como automatizar o processo de integração e entrega contínua, essencial para a agilidade e qualidade no desenvolvimento de software moderno.

## **Funcionalidades**
- **Aplicação React** que exibe citações aleatórias de uma lista.
- **Pipeline CI/CD** configurado com **CircleCI** para automação de testes e build.
- **Deploy automático** da aplicação para **Heroku** após cada push no repositório.
- **Testes automatizados** para garantir que a aplicação esteja funcionando conforme esperado antes do deploy.

## **Link para Visualização**

Você pode visualizar a aplicação em produção diretamente no Heroku acessando o seguinte link:

[**Acesse o site - Gerador de Frases**](https://projeto-gerador-de-frases.herokuapp.com/)

## **Estrutura de Arquivos**

A estrutura do repositório é a seguinte:

```bash
├── .circleci/                 # Configuração do CircleCI para pipeline de CI/CD
│   └── config.yml             # Arquivo de configuração do CircleCI
├── src/                       # Código fonte da aplicação React
│   ├── App.js                 # Componente principal da aplicação
│   ├── index.js               # Ponto de entrada da aplicação React
│   └── styles.css             # Estilos para a aplicação
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── package.json               # Dependências e scripts do projeto
├── README.md                  # Este arquivo de documentação
└── LICENSE                    # Arquivo de licença do projeto (MIT)
```

## **Como Rodar o Projeto**

1. **Clonar o Repositório**:

   Clone o repositório para sua máquina local com o seguinte comando:

   ```bash
   git clone https://github.com/jacivaldocarvalho/Projeto-Gerador-de-Frases.git
   ```

2. **Instalar as Dependências**:

   Navegue até o diretório do projeto e instale as dependências utilizando **npm** ou **yarn**:

   ```bash
   cd Projeto-Gerador-de-Frases
   npm install
   # ou
   yarn install
   ```

3. **Rodar a Aplicação Localmente**:

   Para rodar a aplicação localmente, execute:

   ```bash
   npm start
   # ou
   yarn start
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## **Evoluções Possíveis para o Projeto**

### 1. **Melhorar o Gerenciamento de Citações**
Atualmente, as citações estão estáticas. A aplicação pode ser evoluída para buscar citações de uma **API externa**, permitindo maior diversidade e dinamicidade nas frases geradas.

### 2. **Integração com Outros Serviços de Deploy**
O pipeline pode ser expandido para incluir outras plataformas de deploy contínuo, como **Netlify** ou **Vercel**, para demonstrar a flexibilidade do CI/CD.

### 3. **Expansão dos Testes Automatizados**
Embora o pipeline já execute testes básicos, ele pode ser expandido para incluir testes mais abrangentes, como **testes de integração** e **testes end-to-end** com **Cypress** ou **Puppeteer**.

### 4. **Adição de Funcionalidades de Personalização**
Permitir que os usuários personalizem o tipo de citações que desejam receber (motivacionais, filosóficas, engraçadas, etc.), salvando suas preferências em uma base de dados ou no local storage.

### 5. **Design e Acessibilidade**
Melhorar o design da aplicação, tornando-a mais visualmente atraente e acessível, garantindo que os usuários tenham uma experiência mais agradável, mesmo em dispositivos móveis.

## **Contribuições**

Se você tiver sugestões de melhorias ou encontrar problemas com o código, sinta-se à vontade para abrir um **issue** ou submeter um **pull request**.

## **Contatos e Network**

- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/jacivaldocarvalho/) 👔
- **E-mail**: [E-mail](mailto:jacivaldocarvalho@gmail.com) 📧
- **GitHub**: [GitHub](https://github.com/jacivaldocarvalho) 🐙
- **Medium**: [Medium](https://medium.com/@jacivaldocarvalho) ✍️

Sempre aberto a novas conexões e oportunidades de aprendizado!

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

## **Referências Bibliográficas**

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [CircleCI - Documentação Oficial](https://circleci.com/docs/)
- [Heroku - Guia de Deploy](https://devcenter.heroku.com/articles/git)
- [Integração Contínua e Entrega Contínua](https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd)
- [Guia de Testes em React com Jest](https://reactjs.org/docs/testing.html)
