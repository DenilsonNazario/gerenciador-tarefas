import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from './shared';
import { ListarTarefasComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastraTarefaComponent } from './cadastra';
import { EditTarefaComponent } from './editar';

@NgModule({
  declarations: [ListarTarefasComponent, CadastraTarefaComponent, EditTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [TarefaService]
})
export class TarefasModule { 
  constructor(){}

}
