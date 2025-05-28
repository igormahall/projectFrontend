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
