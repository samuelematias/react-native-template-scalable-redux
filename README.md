<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://samuelmataraso.com">
    <img src="https://i.imgur.com/n7edZ5O.png" alt="Logo">
  </a>

  <h3 align="center">Template Scalable Redux</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
  <!-- - [Licença](#licen%C3%A7a) -->
- [Sobre](#sobre)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template com organização e arquitetura para uma Aplicação Mobile Escalável utilizando Redux e Redux-Saga que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

Para a criação desse template contei com a ajuda muito importante do [Talysson de Oliveira](https://twitter.com/talyssonoc). Caso tenha interesse sobre organização e arquitetura Escalável, você pode acessar o [Medium](https://blog.codeminer42.com/@talyssonoc) do Talysson, que lá existe alguns posts sobre o assunto.

Algumas partes do template, foram baseadas no [Template Rocketseat Advanced](https://github.com/Rocketseat/react-native-template-rocketseat-advanced) da Rocketseat.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;

  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;

    - [camelcase-keys](https://github.com/sindresorhus/camelcase-keys) - O camelcase-keys Converte as chaves de objeto para camel case usando camelcase;

- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Navigation Redux Helpers](https://github.com/react-navigation/redux-helpers) - API que permite que o usuário gerencie seu estado React Navigation de dentro do Redux.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [React Native Device Info](https://github.com/react-native-community/react-native-device-info) - API que permite a acessar informações sobre o Device;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Ramda](https://ramdajs.com/) - O Ramda seria Uma biblioteca funcional prática para programadores de JavaScript, que trabalha em cima de manipulação com Arrys e Objetos.
- [Moment](https://momentjs.com/) - O Moment seria uma biblioteca para Analise, validação, manipulação e exibição de datas e horas em JavaScript.
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md) - Plugin que permite acompanhar todas as Actions que são disparadas na aplicação, mostrando toda a estrutura da Action;
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md) - Plugin que permite você percorrer uma saga na sua aplicação, poderá ver a saga e os efeitos que ela desencadeia ao longo do caminho;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Regras de linting do ESLint e algumas indicadas pelo próprio Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
- [Prettier](https://prettier.io/) - O Prettier é um formatador de código opinativo, que dá suporte a várias linguagens, como o JavaScript, por exemplo. Usamos ele principalmente para manter o código consistente.
  - [.prettierignore](https://prettier.io/docs/en/ignore.html#javascript) - Server para que arquivos especificados nesse arquivo, eles sejam ignorados pelo Prettier para fazer a formatação do código.
  - [.prettierrc.json](https://prettier.io/docs/en/configuration.html) - Server para adicionar nele as regras do Prettier no seu projeto, de forma que qualquer pessoas que usar seu projeto, irá ter as mesmas regras que você.

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
.
├── src/
│   ├── assets/
│   │    └── images/
│   │        └── lego.png
│   ├── common/
│   │   ├── view/
│   │   │   ├── screens/
│   │   │   │   └── ProductDetailScreen.js
│   │   │   └── date/
│   │   │       ├── Duration.js
│   │   │       └── DateFormatting.js
│   │   ├── state/
│   │   │   └── product/
│   │   │       ├── ProductDuck.js
│   │   │       └── ProductSaga.js
│   │   └── infra/
│   │       └── github/
│   │           └── GithubApiService.js
│   ├── user/
│   │   ├── view/
│   │   │   ├── screens/
│   │   │   │   ├── UserScreen.js
│   │   │   │   └── UserDetail.js
│   │   │   ├── Avatar.js
│   │   │   └── job/
│   │   │       ├── JobTable.js
│   │   │       └── MoneyFormatting.js
│   │   ├── state/
│   │   │   ├── UserDuck.js
│   │   │   └── UserSaga.js
│   │   └── infra/
│   │       └── UserApiService.js
│   ├── store/
│   │   ├── CreateStore.js
│   │   ├── Ducks.js
│   │   └── Sagas.js
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── navigation/
│   │   └── AppNavigation.js
│   ├── themes/
│   │       ├──Colors.js
│   │       ├──Fonts.js
│   │       ├──Images.js
│   │       ├── index.js
│   │       └── Metrics.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .prettier.json
├── .prettierignore
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init AwesomeExample --template scalable-redux
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` (executando esse comando na raiz do projeto: `rm ./App.js`) da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e começe importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório para guardar todo tipo de arquivo, relacionado a assets (Ex: images, fonts, etc..)

    - **images** - Diretório para guardar todo tipo de imagem.

  - **common** - Diretório para guardar todo tipo arquivo que seja genérico, ou seja, arquivos que sejam usados em mais de uma feature.

    - **view** - Diretório para guardar arquivos relacionados a view, como telas, components e utils usados na construção de components e/ou telas que sejam genéricos, ou seja, arquivos que sejam usados em mais de uma feature.

      - **screens** - Diretório para guardar arquivos de telas genéricas, ou seja, telas que sejam usados em mais de uma feature.

        - **ProductDetailScreen.js** - Exemplo de uma tela genérica na aplicação, tela essas que é usada em mais de uma feature.

      - **date** - Exemplo de um Diretório que guarda components e utils genéricos, ou seja, components e utils que sejam usados em mais de uma feature.

        - **Duration.js** - Exemplo de um component que seria genérico, no caso component esse que é usado em mais de uma feature.

        - **DataFormatting.js** - Exemplo de um arquivo util, que faria parte da criação/estrutura do component **Duration.js**, nesse caso sendo assim um arquivo util genérico também, pois ele faz parte de um component que é genérico, no caso component esse que é usado em mais de uma feature.

      - **state** - Diretório para guardar arquivos relacionados ao estado da aplicação, arquivos esses que sejam genéricas, ou seja, arquivos que sejam usados em mais de uma feature.

        - **product** - Exemplo de diretório que armazena arquivos do estado da aplicação relacionados a **Product**, arquivos esses que são genéricos, ou seja, arquivos de estado que são usados em mais de uma feature.

          - **ProductDuck.js** - Exemplo de um arquivo Redux referente a **Product**, arquivo esse que seria genérico, no caso, usado em mais de uma feature.

          - **ProductSaga.js** - Exemplo de um arquivo Saga referente a **Product** e ligado ao arquivo **ProductDuck.js**, nesse caso sendo um arquivo Saga genérico também, pois ele seria associado a um arquivo Redux que é genérico, no caso, um arquivo Redux usado em mais de uma feature.

      - **infra** - Diretório para guardar arquivos relacionados a comunicação com uma API que sejam genéricos, ou seja, são usados em mais de uma feature.
        E usado o termo Infra, porque seguindo a ideia de camadas, a comunicação com uma API é um integrante da camada de infra estrutura.

        - **github** - Exemplo de um diretório que armazena arquivos de comunicação com a API do github.


          - **GithubApiService.js** - Exemplo de um arquivo que contem a comunicação com a API do github, no caso os EndPoints.

- **user** - Diretório para guardar os arquivos relacionados APENAS a feature de User.

  - **view** - Diretório para guardar arquivos relacionados a view, como telas, components e utils usados na construção de components e/ou telas que sejam relacionados APENAS a feature de **User**.

    - **screens** - Diretório para guardar arquivos de telas relacionados APENAS a feature de **User**.

      - **UserScreen.js** - Exemplo de uma tela relacionada APENAS a feature de **User**.

      - **UserDetail.js** - Exemplo de uma tela relacionada APENAS a feature de **User**.

    - **Avatar.js** - Exemplo de um component relacionado APENAS a feature de **User**.

    - **job** - Diretório para guardar components e utils relacionados APENAS a feature de **User**.

      - **JobTable.js** - Exemplo de um component relacionado APENAS a feature de **User**.

      - **MoneyFormatting.js** - Exemplo de um util relacionado ao component JobTable.js, component esse que e relacionado APENAS a feature de **User**, fazendo com que o util também tenha essa características.

    - **state** - Diretório para guardar arquivos relacionados ao estado da aplicação, arquivos esses relacionados APENAS a feature de **User**.

      - **UserDuck.js** - Exemplo de um arquivo Redux referente APENAS a feature de **User**.

      - **UserSaga.js** - Exemplo de um arquivo **Saga** referente a APENAS a feature de **User** e ligado ao arquivo UserDuck.js.

    - **infra** - Diretório para guardar arquivos relacionados a comunicação com uma API que sejam referente a APENAS a feature de **User**.
      E usado o termo Infra, porque seguindo a ideia de camadas, a comunicação com uma API é um integrante da camada de infra estrutura.

      - **UserApiService.js** - Exemplo de um arquivo que contem a comunicação com a API de **User**, no caso os EndPoints.

- **store** - Diretório onde será criada toda a estrutura do Redux para a aplicação, como os **Ducks** (Reducers + Action Types + Action Creators), os **Sagas** e um arquivo para centralizar toda essa configuração e disponibilizar para o restante da aplicação;

  - **CreateStore.js** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um **Middleware** para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do **Saga**, criar o store global da aplicação combinando os reducers existentes e exportar o state criado;

  - **Ducks.js** - Arquivo responsável por importar cada **Duck** criado e combiná-los em um só para serem usados no Redux através da função `combineReducers()`;

  - **Sagas.js** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação às funções do **Saga**, que são Funções Generator, nele é definido os **Action Types** a serem "escutados" e qual função executar quando um Action Creator for executado;

- **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

  - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron, com os Plugins `reactotron-redux` e `reactotron-redux-saga`, para ser usado na aplicação;

- **navigation** - Diretório para guardar o arquivo responsável pela navegação da aplicação.

  - **AppNavigation.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **themes** - Diretório onde para guardar todos os arquivos relacionados a estilização de modo global.

  - **Colors.js** - Arquivo com as constantes das cores a serem usadas na aplicação.

  - **Fonts.js** - Arquivo com as fonts e seus styles a serem usados na aplicação.

  - **Images.js** - Arquivo com as constantes das images a serem usadas na aplicação.

  - **index.js** - Arquivo com todos os arquivos dessa pasta indexado.

  - **Metrics.js** - Arquivo com as metricas tratadas para vários tipos de devices a partir do seu PixelRatio.

- **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele é inserido o HOC Provider do `react-redux` que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **.prettier.json** - Arquivo de configuração do Prettier, é nele que são inseridas as regras e configurações.

- **.prettierignore** - Arquivo de ignore do Prettier, é nele que são inseridas os arquivos onde não queremos que o prettier atue.

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### Publicação

Para publicar um template como esse o processo bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);

2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```sh
npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:

   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;

4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;

5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- LICENSE -->

<!-- ## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações. -->

<!-- CONTACT -->

## Sobre

Me segue lá no Twitter: [@samuelmataraso](https://twitter.com/samuelmataraso)

<a href="https://twitter.com/samuelmataraso" target="_blank">
<img src="https://twitter.com/samuelmataraso/profile_image?size=original" height="100" /></a>
