import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '..';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  /* this.tarefas = [
      new Tarefa(1, "Tarefa teste", false),
      new Tarefa(2, "Tarefa teste 1", true)
    ];*/
  }

  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }
  remover($event: any, tarefa: Tarefa):void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa '+tarefa.nome+' ?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    } 

  }

  alterarStatus(tarefa: Tarefa):void{
    if(confirm('Deseja alterar o status da tarefa '+tarefa.nome+' ?')){
      this.tarefaService.alterarStatus(tarefa);
      this.tarefas = this.listarTodos();
    }

  }

}
