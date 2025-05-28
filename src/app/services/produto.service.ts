import { Injectable } from '@angular/core';
//import {Produto} from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProdutos(): Produto[] {
    return [
      { nome: 'Notebook', promocao: true },
      { nome: 'Mouse', promocao: false },
      { nome: 'Teclado', promocao: true }
    ]
  };
}
