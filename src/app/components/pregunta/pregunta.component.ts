import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/model/respuesta';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  
  public respuestaSeleccionada = new Respuesta();
  
  constructor(private router: Router) { }
  public preguntas = [
    {id : 1, pregunta: '¿Para que sirve el airbag?', respuestas: [
    {id: 1, respuesta: "Para inflar un globo", correcta: false},
    {id: 2, respuesta: "Para que no se rompa el parabrisas", correcta: false},
    {id: 3, respuesta: "Para prevenir golpes fuertes en un accidente", correcta: true},
    {id: 4, respuesta: "No tiene ninguna utilidad", correcta: false}
  ]},
    {id: 2, pregunta: '¿Otra pregunta?', respuestas: [
      {id: 1, respuesta: "Para inflar un globo", correcta: false},
      {id: 2, respuesta: "Para que no se rompa el parabrisas", correcta: false},
      {id: 3, respuesta: "Para prevenir golpes fuertes en un accidente", correcta: true},
      {id: 4, respuesta: "No tiene ninguna utilidad", correcta: false}
    ]}];
  public respondido = false;
  public preguntaActual;
  public indiceActual = 0;
  public puntaje = 0;

  ngOnInit() {
    this.preguntaActual = this.preguntas[this.indiceActual];
  }

  procesarRespuesta(resp){
    this.respuestaSeleccionada = resp;
    if (this.respuestaSeleccionada.correcta){
      this.puntaje +=12;
    } else {
      this.puntaje-=5;
    }
    console.log(this.puntaje);
    this.respondido = true;
  }

  pasarASiguiente(){
    this.respondido = false;
    this.indiceActual++;

    if (this.indiceActual == this.preguntas.length){
      this.router.navigateByUrl("/ranking");
    }

    this.preguntaActual = this.preguntas[this.indiceActual];
  }

}
