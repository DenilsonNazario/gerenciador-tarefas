import { Routes } from '@angular/router'; 
import { ListarTarefasComponent } from './listar';
import { CadastraTarefaComponent } from './cadastra';

export const TarefaRoutes: Routes = [
    {
        
     path: 'tarefas',
     redirectTo: 'tarefas/listar'                },
    
    {
        path: 'tarefas/listar',//assosia um path a um componente especifico
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastra',//assosia um path a um componente especifico
        component: CadastraTarefaComponent
    }


];

