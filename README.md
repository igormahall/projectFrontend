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
# Aula 28/05

## Serviços e Injeção de Dependência

- Componentes: se preocupam com mostrar os dados na tela
- Serviços: se preocupam com a origem e processamento dos dados (ETL)

- No nosso projeto, cria a pasta src>app>components, e move os 3 componentes nessa pasta (nome-component, perfil e produtos)
  - Aceita a refatoração
- Adicionalmente, crie as pastas 'interfaces' e 'services' na 'app'
- Depois cria app>components>app
  - move os arquivos app(css,html,spec.ts e ts) pra dentro dela
### Serviços: lógica de negocio e manupilação de dados
  - atuam como 'bastidores'
  - reutilizacao de codigo
  - serviços processam dados (componentes os exibe)
  - organização do código (limpo e manutenção)

- Criando um novo serviço
```bash
ng generate service services/produto
```
- No arquivo 'produto.service.ts' criado:
```ts
import { Injectable } from '@angular/core';
//import {Produto} from '../interfaces/produto';

//@Injectable({providedIn: 'root'})
export class ProdutoService {

  getProdutos(): Produto[] {
  return [
  { nome: 'Notebook', promocao: true },
  { nome: 'Mouse', promocao: false },
  { nome: 'Teclado', promocao: true }
  ]};
}
```
- Obs: quando tem 'Injectable' -> o Angular que se encarrega por configurar
- Teste
