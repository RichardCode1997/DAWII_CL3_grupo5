import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromedioComponent } from './pages/promedio/promedio.component';
import { ListaUnoComponent } from './pages/lista-uno/lista-uno.component';
import { ListaDosComponent } from './pages/lista-dos/lista-dos.component';

const routes: Routes = [
  { path: 'promedio', component: PromedioComponent },
  { path: 'usuarios', component: ListaUnoComponent },
  { path: 'noticias', component: ListaDosComponent },
  { path: '**', redirectTo: 'promedio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
