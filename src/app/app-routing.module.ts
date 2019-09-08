import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'respuesta', component: RespuestaComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
