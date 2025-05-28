(Projeto de Angular no Webstorm)

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
  - necessário reiniciar após instalação para atualizar variáveis de ambiente 
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
- Clica em run > http://localhost:4200/
- Opcionais: SCSS (estilo) é melhor
- Dúvidas? https://angular.dev/tutoriais/first-app

## Estrutura
- src/app/ > nela que ficam os componentes e módulos
- src/assets/ > imagens, arquivos que serão utilizados
  - vamos usar direto do Django
- src/environments/ > configs para diferentes ambientes (dev, qa, produção)
- angular.json > config geral do projeto
- package.json > lista de dependências

## Componente
- Unidade básica da interface do Angular (uma pasta)
- Bloco com: 
  - template html (o que aparece na tela);
  - css (estilo);
  - arquivo typescript (lógica e os dados).
- Criando componente (src>app>nome-component)
```bash
ng generate component nome-component
```
### Populando o componente
- Vai no arquivo: src/app/nome-component/nome-component.component.ts
- Adicionar no @Component:
import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-component',
  imports: [],
  standalone: true,
  templateUrl: './nome-component.component.html',
  styleUrl: './nome-component.component.css'
})
export class NomeComponentComponent {
  nome: string = "Carlinhos";
  profissao: string = "Desenvolvedor Web";
  hobbies: string[] = ["Leitura", "Passear", "Tecnologia", "Jogar Bola"];
}

- Vai no arquivo: src/app/nome-component/nome-component.component.html
```html
<h2>{{nome}}</h2>
<p>{{profissao}}</p>
<ul>
  @for (hobby of hobbies; track hobby) {
  <li>{{hobby}}</li>
  }
</ul>
```
### Exibindo o componente no HTML
- Agora falta inserir o 'nome-componente' pro app:
1) vai no arquivo: src/app/app.component.ts

[//]: # (```typescript)

[//]: # (import { Component } from '@angular/core';)

[//]: # (import { RouterOutlet } from '@angular/router';)

[//]: # (import { NomeComponentComponent} from './nome-component/nome-component.component';)

[//]: # ()
[//]: # (@Component&#40;{)

[//]: # (  selector: 'app-root',)

[//]: # (  imports: [RouterOutlet, NomeComponentComponent],)

[//]: # (  standalone: true,)

[//]: # (  templateUrl: './app.component.html',)

[//]: # (  styleUrl: './app.component.css')

[//]: # (}&#41;)

[//]: # (export class AppComponent {)

[//]: # (  title = 'projectFrontend';)

[//]: # (})

[//]: # (```)
2) Agora vai no arquivo: src/app/app.component.html
- Apaga tudo que tá escrito e cola:
```html
<app-nome-component></app-nome-component>
```
---
# Aula 27/05
- Passos para adicionar componente
1) Configurar typescript (src/app/perfil/perfil.component.ts)
2) Popular HTML (src/app/perfil/perfil.component.html)
3) Adicionar componente no typescript do app (src/app/app.component.ts)
4) Adicionar componente no html do app (src/app/app.component.html)

5) Ajustar o estilo: src/app/perfil/perfil.component.css

---


## Data Binding e Diretivas
- Ex: {{perfil.nome}} (interpolação)
  - Dados do typescript aparecem na tela (ts -> html);
  - Ações do usuário na tela voltam para o componente (html -> ts)
- Sem o data binding, o que o usuário vê e o que sistema faz estariam separados;
- Feedback ao usuário

### Property Binding
- Exemplo: [src]="imagemURL"
- Interpolação dentro de uma propriedade de uma tag
- Conecta uma propriedade do HTML -> variável do componente

### Event Binding
- (click)="mudarTexto()"
- Liga um evento do DOM a uma função do componente

### Two-way Binding
- Ex: [(ngModel)]="nome"
- Variável é atualizada tanto na tela quanto no código
- TS
  - nome = '';
- HTML
  - <input [(ngModel)]="nome">
  - <p>Você digitou</p>

- Passo a passo:
  - 1) No 'perfil.component.ts':
```typescript
import {FormsModule} from '@angular/forms';
```
  - 2) Ainda no ts, dentro do Component:
```typescript
  imports: [
  FormsModule
]
```
  - 3) No 'perfil.component.html'':
```html
<input [(ngModel)]="nome">
<p>{{nome}}</p>
```

### Diretivas
- Instruções no HTML como mostrar certos elementos
- Tipos: estruturais e de atributo

- Estruturais: mostrar ou esconder algo com base em uma condição
```html
@if(){};
<ul> @for(){<li>...</li>} </ul>;
@switch (){@case(){} @default{}}
```
- de Atributo: mudam o estilo ou comportamento de um elemento já existente;
```typescript
listClasses = 'full-width-outlined'
```
```html
<ul [class]="listClasses"></ul>
```
- CSS class binding
```typescript
emPromocao: boolean = true;
```
```html
<p [class.destaque]="emPromocao">Produto</p>
```
- CSS style property binding
```typescript
boolFlexbox: boolean = true;
```
```html
<div [style.display]="boolFlexbox ? 'flex' : 'block'">...</div>
```
---
Exercício
1) Criar componente "Produtos"
2) Crie valores dos produtos no TS
3) Crie o estilo no CSS
4) Crie o HTML
5) Rode e veja

---
(gerado automaticamente pela IDE)
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
