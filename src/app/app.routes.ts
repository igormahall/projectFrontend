import { Routes } from '@angular/router';
import {NomeComponentComponent} from './components/nome-component/nome-component.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProdutosComponent} from './components/produtos/produtos.component';

export const routes: Routes = [
  {path: 'nome', component: NomeComponentComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: '**', redirectTo: 'nome'}
];
