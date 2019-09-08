import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private router: Router) { }

  public puntajes = [
    {posicion: 420, nombre: "Nombre 2", puntaje: 1212},
    {posicion: 421, nombre: "Nombre 2", puntaje: 1212},
    {posicion: 422, nombre: "Nombre 2", puntaje: 1212}
  ]

  ngOnInit() {
  }

  goPregunta(){
    this.router.navigateByUrl('/pregunta');
  }
}
