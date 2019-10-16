import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.scss']
})
export class CadastraTarefaComponent implements OnInit {
 
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(
    private tarefaService: TarefaService,
    private router : Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }
  cadastrar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastra(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
