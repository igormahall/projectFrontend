import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome: string = '';
  perfil = {
    username: "carlinhosmaia",
    nome: "Carlinhos Maia",
    local: "Manaus",
    idade: 28,
    profissao: "Desenvolvedor Web",
    empresa: "FpfTech",
    publicacoes: 1145,
    seguidores: 1743,
    seguindo: 1549,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7WF9edCU-Twlza-oH0jK9NES1CNFGjY3BQ&s"
  }
}
