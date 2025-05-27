import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
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
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Q-Xt2NMiDeosqpqpPhJiK55-Phjtn38aA3jDqICM0twVqtrt6v9aZwh95Gzq2F6JKZ4"
  }
}
