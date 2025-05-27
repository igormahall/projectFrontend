import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PerfilComponent} from './perfil/perfil.component';
import {NomeComponentComponent} from './nome-component/nome-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NomeComponentComponent, PerfilComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectFrontend';
}
