import { Component } from '@angular/core';
import {PerfilComponent} from './perfil/perfil.component';
import {ProdutosComponent} from './produtos/produtos.component';

@Component({
  selector: 'app-root',
  imports: [PerfilComponent, ProdutosComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectFrontend';
}
