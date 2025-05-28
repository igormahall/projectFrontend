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
    foto: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gbVDipCUIfWARZ69XMdCPgHaE8%26pid%3DApi&sp=1748390222Tcb9ea71fb5307df19aaa4f5036e53eec5e113400b9fc7dfa0086ab7b320eac07"
  }
}
