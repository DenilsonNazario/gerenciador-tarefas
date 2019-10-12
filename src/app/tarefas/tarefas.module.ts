import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from './shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers: [TarefaService]
})
export class TarefasModule { 
  constructor(){}
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) :[];
  }

  cadastra(tarefa: Tarefa):void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa{
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);

  }
  atualizar(tarefa : Tarefa):void{
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs)=>{
      if(tarefa.id === obj.id){
        objs[index] = tarefa
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number):void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(tarefa : Tarefa):void{
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs)=>{
      if(tarefa.id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }




}
