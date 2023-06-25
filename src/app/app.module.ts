import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromedioComponent } from './pages/promedio/promedio.component';
import { ListaUnoComponent } from './pages/lista-uno/lista-uno.component';
import { ListaDosComponent } from './pages/lista-dos/lista-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromedioComponent,
    ListaUnoComponent,
    ListaDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
