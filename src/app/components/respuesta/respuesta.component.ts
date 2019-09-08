import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public onContinuar = new EventEmitter<any>();
  public imageSrc = "../../../assets/images/incorrecto.png";

  ngOnInit() {
    console.log(this.correcta);
    if (this.correcta){
      this.imageSrc = "../../../assets/images/correcto.png";
    }
  }

  continuar() {
    this.onContinuar.emit();
  }

}
