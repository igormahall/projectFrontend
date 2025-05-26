# Angular: Frontend framework
- Open-source (google)
- Aplicações web dinâmicas
- SPA (single page application): só atualiza o que é necessário (mantém o que pode ser reutilizado)
- Requisitos: node.js e npm
- Node.js: executa o JavaScript no lado do servidor
- O Angular trabalha com o typescrpit (tipo de javascript);
  - JS pode ser usado em vários ambientes (front, back, ...)
  - Usado para criar servidores, CLIs,e build tools;
  - Assíncrono e orientado a eventos;
  - Alta performance para I/O
- NPM: Node Package Manager
- bibliotecas de JavaScript
  - mantém dependências listadas no package.json
  - node/modules: onde os pacotes são instalados

- Verificar se ambos estão instalados:
```bash
node -v
npm -v
```
- Caso não tenha: https://nodejs.org/en/download (já serve para os dois)
- Dica de site: https://www.freecodecamp.org/
- Instalando Angular CLI (ng)
```bash
# se está instalado, verifica a versão do CLI
ng version
#para instalar o Angular CLI
npm install -g @angular/cli 
# Confirma que foi instalado
ng version
```
- Exemplos: $ ng serve, ng build, ng test (ng < aNGular)
- Typescript é uma evolução do JavaScript (com tipagem, evita erros, facilita manutenção)
- componentes(pedacos da tela), serviços (logica), modulos (organizacao)
- Reatividade
- HttpClient: comunicar com APIs
- RxJS: programação reativa

## Criando o primeiro projeto
1. Opção no terminal
- Abre o navegador automaticamente em http://localhost:4200
```bash
ng new meu-projeto # cria novo projeto angular chamado "meu-projeto"
cd meu-projeto #entra na pasta do projeto
ng serve -o #roda o projeto na porta
```

2. Opção no Webstorm
- Novo projeto > Angular CLI  > Location muda o nome do projeto > OK
- Opcionais: SCSS (estilo) é melhor
- Dúvidas? https://angular.dev/tutoriais/first-app

---
# ProjectFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
