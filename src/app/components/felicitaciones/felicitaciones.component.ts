import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-felicitaciones',
  templateUrl: './felicitaciones.component.html',
  styleUrls: ['./felicitaciones.component.css']
})
export class FelicitacionesComponent implements OnInit {
  puntaje = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.puntaje = this.route.snapshot.params.puntaje
  }

}
