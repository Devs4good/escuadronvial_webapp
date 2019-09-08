import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EmpezarComponent } from './components/empezar/empezar.component';
import { FormsModule } from '@angular/forms';
import { FelicitacionesComponent } from './components/felicitaciones/felicitaciones.component';
import { MasinformacionComponent } from './components/masinformacion/masinformacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreguntaComponent,
    ReporteComponent,
    RankingComponent,
    RespuestaComponent,
    CategoriasComponent,
    EmpezarComponent,
    FelicitacionesComponent,
    MasinformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
