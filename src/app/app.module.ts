import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreguntaComponent,
    ReporteComponent,
    RankingComponent,
    RespuestaComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
