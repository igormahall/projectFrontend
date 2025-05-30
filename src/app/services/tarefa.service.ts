import { Injectable } from '@angular/core';
import {Tarefa} from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  getTarefas(): Tarefa[] {
    return [
      { titulo: 'Estudar Angular', descricao: 'Fazer um componente de tarefas', concluido: false },
      { titulo: 'Exercício', descricao: 'Realizar os exercicios em sala', concluido: false },
      { titulo: 'Fazer atividade', descricao: 'Fazer a atividade para casa', concluido: false }
    ]
  }
}
