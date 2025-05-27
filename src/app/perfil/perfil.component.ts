import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  username: String = "carlinhosmaia";
  nome: string = "Carlinhos Maia";
  local: String = "Manaus";
  idade: number = 28;
  profissao: String = "Desenvolvedor Web";
  empresa: String = "FpfTech";
  publicacoes: number = 1145;
  seguidores: number = 1743;
  seguindo: number = 1549;
}
