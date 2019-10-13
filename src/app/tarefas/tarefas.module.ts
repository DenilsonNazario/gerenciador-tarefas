import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from './shared';
import { ListarTarefasComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastraTarefaComponent } from './cadastra';

@NgModule({
  declarations: [ListarTarefasComponent, CadastraTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [TarefaService]
})
export class TarefasModule { 
  constructor(){}

}
