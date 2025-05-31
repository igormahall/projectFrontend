import { Routes } from '@angular/router';
import {NomeComponentComponent} from './components/nome-component/nome-component.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProdutosComponent} from './components/produtos/produtos.component';
import {TarefasComponent} from './components/tarefas/tarefas.component';
import {ClimaComponent} from './components/clima/clima.component';

export const routes: Routes = [
  {path: 'nome', component: NomeComponentComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: 'clima', component: ClimaComponent},
  {path: '**', redirectTo: 'nome'}
];
