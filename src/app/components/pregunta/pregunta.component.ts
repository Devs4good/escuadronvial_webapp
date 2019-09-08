import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/model/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  
  public respuestaSeleccionada = new Respuesta();
  
  constructor() { }
  public pregunta = "¿Para qué sirve el airbag?";
  public respuestas = [
    {id: 1, respuesta: "Para inflar un globo", correcta: false},
    {id: 2, respuesta: "Para que no se rompa el parabrisas", correcta: false},
    {id: 3, respuesta: "Para prevenir golpes fuertes en un accidente", correcta: true},
    {id: 4, respuesta: "No tiene ninguna utilidad", correcta: false}
  ];
  public respondido = false;

  ngOnInit() {
  }

  procesarRespuesta(resp){
    this.respuestaSeleccionada = resp;
    this.respondido = true;
  }

}
