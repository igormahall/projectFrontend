import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = [
    {nome: 'Notebook', promocao: true},
    {nome: 'Mouse', promocao: false},
    {nome: 'Teclado', promocao: true},
  ]
}
