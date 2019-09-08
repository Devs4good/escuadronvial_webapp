import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/model/respuesta';
import {Router} from '@angular/router';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { Pregunta } from 'src/model/pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  
  public respuestaSeleccionada = new Respuesta();
  
  constructor(private router: Router,
              private preguntasService: PreguntasService) { }
  public preguntas : Pregunta[];
  public respondido = false;
  public preguntaActual: Pregunta;
  public indiceActual = 0;
  public puntaje = 0;
  public respuestas: Respuesta[];
  public respuestaCorrectaActual: string;

  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe(data => {
      this.preguntas = data as Pregunta[];
      this.preguntas = this.preguntas.filter(x => x.pregunta.valueOf.toString().length < 49);
      console.log(this.preguntas);
      this.preguntaActual = this.preguntas[this.indiceActual];

      this.preguntasService.getRespuestas().subscribe(data => {
        this.respuestas = data as Respuesta[];
        this.getRespuestasDePreguntaActual();
      })
    });
  }

  getRespuestasDePreguntaActual(){
    this.preguntaActual.respuestas = 
          this.respuestas.filter(x => x.pregunta == 'https://rocky-ocean-09170.herokuapp.com/preguntas/' + this.preguntaActual.id + '/');
      console.log(this.preguntaActual);
  }

  procesarRespuesta(resp){
    this.respuestaSeleccionada = resp;
    if (this.respuestaSeleccionada.correcta){
      this.puntaje +=12;
    } else {
      this.puntaje-=5;
    }
    this.respuestaCorrectaActual = this.preguntaActual.respuestas.find(x => x.correcta).respuesta;
    this.respondido = true;
  }

  pasarASiguiente(){
    this.respondido = false;
    this.indiceActual++;

    if (this.indiceActual == this.preguntas.length){
      this.router.navigateByUrl("/ranking");
    }
    this.preguntaActual = this.preguntas[this.indiceActual];
    this.getRespuestasDePreguntaActual();
  }

}
