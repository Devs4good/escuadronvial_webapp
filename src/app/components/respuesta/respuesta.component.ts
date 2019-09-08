import { Component, OnInit, Input } from '@angular/core';
import { Respuesta } from 'src/model/respuesta';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  constructor() { }
  @Input() correcta;
  @Input() respuesta;
  public imageSrc = "../../../assets/images/incorrecto.png";

  ngOnInit() {
    console.log(this.correcta);
    if (this.correcta){
      this.imageSrc = "../../../assets/images/correcto.png";
    }
  }

}
