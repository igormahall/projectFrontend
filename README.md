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

### Interface
- Antes de mexer com o service, precisa mexer com a interface
- Transforma: object -> type
- Criar o arquivo: "src/app/interfaces/Produto.ts"
```ts
export interface Produto {
  nome: string;
  promocao: boolean;
}
```
- O código acima cria um tipo Produto que pode ser utilizado no serviço
---
- Agora sim, no arquivo 'produto.service.ts' criado:

[//]: # (```ts)

[//]: # (import { Injectable } from '@angular/core';)

[//]: # (import {Produto} from '../interfaces/Produto';)

[//]: # ()
[//]: # (@Injectable&#40;{providedIn: 'root'}&#41;)

[//]: # (export class ProdutoService {)

[//]: #/ ()
[//]: # (  getProdutos&#40;&#41;: Produto[] {)

[//]: # (    return [)

[//]: # (      { nome: 'Notebook', promocao: true },)

[//]: # (      { nome: 'Mouse', promocao: false },)

[//]: # (      { nome: 'Teclado', promocao: true })

[//]: # (    ])

[//]: # (  };)

[//]: # (})

[//]: # (```)
(Obs: quando tem 'Injectable' -> o Angular que se encarrega por configurar)

### Injeção de Dependência
- Angular entrega uma instância de uma classe (serviço)
  - Injetar o servico (getProduto) no componente (produto)
  - O serviço injeta os dados no componente
- Vai no 'produtos.component.ts':
  - Importar: inject, serviço e interface 'produto'
  - Mudar expor class para: "private produtoService = inject(ProdutoService);"
  - 'ngOnInit(){this.listaProdutos = this.produtoService.getProdutos();}' vai rodar o serviço no component (é um contrutor do angular);
- Para aparecer no HTML, precisa atualizar no componente 'listaProdutos':
  - '@for (p of **listaProdutos**; track p) {'
---
# Aula 29/05
## Roteamento
- Angular tem o **RouterModule**, que se responsabiliza pelo controle da navegação;
- A diretiva especial routerLink roteia sem recarregar a página;
- Router-outlet é o pedaço que vai atualizando após a escolha do link
  - "app-routes.rs"

[//]: # (```ts)

[//]: # (import { Routes } from '@angular/router';)

[//]: # (import {NomeComponentComponent} from './components/nome-component/nome-component.component';)

[//]: # (import {PerfilComponent} from './components/perfil/perfil.component';)

[//]: # (import {ProdutosComponent} from './components/produtos/produtos.component';)

[//]: # ()
[//]: # (export const routes: Routes = [)

[//]: # (  {path: 'nome', component: NomeComponentComponent},)

[//]: # (  {path: 'perfil', component: PerfilComponent},)

[//]: # (  {path: 'produtos', component: ProdutosComponent},)

[//]: # (  {path: '**', redirectTo: 'nome'})

[//]: # (];)

[//]: # (```)
- depois que alterar o arquivo acima, vai ter que atualizar o 'app.component.ts'
```ts
import {RouterOutlet, RouterLink} from '@angular/router';
    imports: [RouterOutlet, RouterLink]
```
- Por fim no app.html:
```html
<nav>
  <a [routerLink]="[/nome]">Nome Componente</a>
|
<a [routerLink]="[/perfil]">Perfil</a>
|
<a [routerLink]="[/produtos]">Produtos</a>
  </nav>
```
## Desafio
**Objetivo**: criar uma lista onde o usuário possa:
Ver todas as tarefas, clicar para marcar como concluída (opcional, para os avançados)
Tarefas concluídas devem aparecer com um estilo diferente
1. Crie uma lista com (pelpo menos) 3 tarefas:
   2. Estudar Angular, Fazer exercício, fazer atividade
3. (opcional) faça uma função que faça o toggle de tarefa concluída
   4. toggle é true => false e false => true
5. Faça o HTML e o CSS serem dinâmicos

**Passo a Passo**
1. Criar o componente (standalone, tarefa: titulo, descricao, concluido)
2. Interface/Serviço (criar as tarefas aqui)
3. Component TS (ngOnInit(), toggle)
4. Componente HTML(eventBinding) + CSS
5. Rotas + app.html

### Solução
1. Criar componente
```bash
ng g c components/tarefas
```
2. Criar "interface/Tarefa.ts":
```ts
export interface Tarefa {
  titulo: string;
  descricao: string,
  concluido: boolean;
}
```
3. Criar o serviço tarefa
```bash
ng g s services/tarefa
```
- Editar o 'tarefas.service.ts', adicionando:
```ts
import {Tarefa} from '../interfaces/Tarefa';

export class TarefaService {
  getTarefas(): Tarefa[] {
    return [
      { titulo: 'Estudar Angular', descricao: 'Fazer um componente de tarefas', concluido: false },
      { titulo: 'Exercício', descricao: 'Realizar os exercicios em sala', concluido: false },
      { titulo: 'Fazer atividade', descricao: 'Fazer a atividade para casa', concluido: false }
    ]
  }
}
```
4. Modificar 'tarefas.ts':
   5. importar inject, tarefa.service e interface Tarefa
   6. criar a injeção (private tarefaService = inject(TarefaService);)
   7. criar o ngOnInit (this.listaTarefas = this.tarefaService.getTarefas();)
   8. (depois volta pra fazer o toggle)
8. Modificar 'tarefas.html:
   9. voltar depois pra fazer o event binding
```html
<ol>
  @for (tarefa of listaTarefas; track tarefa) {
  <li [style.color]="tarefa.concluido ? 'green' : 'black'">
    {{tarefa.titulo}} > {{tarefa.descricao}}
  </li>
  }
</ol>
```
9. Modificar 'tarefas.css' (*{font-family: Arial, sans-serif;})
10. Modificar 'apps.routes.ts'

[//]: # (```ts)

[//]: # (import {TarefasComponent} from './components/tarefas/tarefas.component';)

[//]: # ({path: 'tarefas', component: TarefasComponent})

[//]: # (```)
11. Modificar 'app.component.html' (<a [routerLink]="['/tarefas']">Tarefas</a>)
- Vamos voltar para a parte avançada
12. Para fazer o **Toggle**, volta pro 'tarefas.component.ts':
    13. toggleConcluido(tarefa: Tarefa) {tarefa.concluido = !tarefa.concluido;}
14. Para fazer o **EventBinding**, volta pro 'tarefas.component.html':
    15. adicionar ao <li>: (click)="toggleConcluido(tarefa)"
---
# Aula 30/05: Consumo de APIs com HttpClient
- HttpClientModule: busca dados de APIs externas (noticias, produtos, ...)
- Projeto final: nossa API Django -> Angular
- Mas hoje, vamos pegar uma API climática (previsão do tempo)
  - QueryParams: latitude, longitude
- Endpoint: https://api.open-meteo.com/v1/forecast
  - lat:-3.117034 | lon:-60.025780 | elevation:61.0
  - current=temperature_2m,wind_speed_10m
  - hourly=temperature_2m,relative_humidity_2m,wind_speed_10m

## Ativando o HttpClient no projeto Angular?
- app.config.ts:
```bash
import {provideHttpClient} from '@angular/common/http';
providers: provideHttpClient()
```
## Passo-a-passo
1) Crie o componente clima
```bash
ng g c components/clima
```
2) Crie a interface ClimaTable
```bash
export interface ClimaTable {
  time: string;
  temperature: number,
  humidity: number,
  windSpeed: number
}
```
3) Crie o serviço climaService
```bash
ng g s services/clima
```
```bash
import {inject, Injectable} from '@angular/core';
import { ClimaTable } from '../interfaces/ClimaTable';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';
  private latitude = -3.117034;
  private longitude = -60.025780;

  getClima(): Observable<any> {
    const params = [
      `latitude=${this.latitude}`, `longitude=${this.longitude}`,
      `current=temperature_2m,wind_speed_10m`,
      `hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    ].join('&');

    return this.http.get(`${this.apiUrl}?${params}`);
  }
}
```
4) clima.component.ts
```bash
import { Component, inject } from '@angular/core';
import {ClimaService} from '../../services/clima.service';
import {ClimaTable} from '../../interfaces/ClimaTable';

@Component({
  selector: 'app-clima',
  imports: [],
  standalone: true,
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent {
  private climaService = inject(ClimaService);
  climaData: any;
  date: Date = new Date();
  dataTable: ClimaTable[]=[];

  subtrair4horas(dataEmString:string) {
    let novaData = new Date(dataEmString);
    novaData.setHours(novaData.getHours()-4);
    return novaData;
  }

  ngOnInit() {
    this.climaService.getClima().subscribe((response:any) => {
      this.climaData = response;
      this.date = this.subtrair4horas(response.current.time);
      this.dataTable = response.hourly.time.map((t:string, i:number) => ({
        time: this.subtrair4horas(t),
        temperature: response.hourly.temperature_2m[i],
        humidity: response.hourly.relative_humidity_2m[i],
        windSpeed: response.hourly.wind_speed_10m[i]
      }));
    });
  }
}
```
5) clima.html
```bash
<div class="data-info">
  <p>Latitude: {{climaData.latitude}}</p>
  <p>Longitude: {{climaData.longitude}}</p>
  <p>Elevação: {{climaData.elevation}}</p>
  <p>Data: {{date}}</p>
  <p>Temperatura: {{climaData.current.temperature_2m}}ºC</p>
  <p>Vento: {{climaData.current.wind_speed_10m}} m/s</p>
</div>
<table>
  <tr>
    <th>Hora</th>
    <th>Temperatura</th>
    <th>Humidade</th>
    <th>Vento</th>
  </tr>
  @for (data of dataTable; track data) {
    <tr>
      <td>{{data.time}}</td>
      <td>{{data.temperature}}ºC</td>
      <td>{{data.humidity}}%</td>
      <td>{{data.windSpeed}} m/s</td>
    </tr>
  }
</table>
```
6) clima.css
```
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f5f7fa;
  color: #333;
  padding: 2rem;
  line-height: 1.6;
}

h1 {
  text-align: center;
  color: #2a4365;
}

p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.data-info {
  background: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  max-width: 600px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}
th {
  background-color: #2b6cb0;
  color: white;
  font-weight: 600;
}
tr:nth-child(even) {
  background-color: #f7fafc;
}
tr:hover {
  background-color: #ebf8ff;
}
```
   
