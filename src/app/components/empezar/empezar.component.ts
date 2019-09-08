import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empezar',
  templateUrl: './empezar.component.html',
  styleUrls: ['./empezar.component.css']
})
export class EmpezarComponent implements OnInit {
  nombre = '';
  error = '';
  edad ='';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  llenarDatos(f) {
    console.log(f.value);
    const data = f.value;
    if (!data.nombre || !data.edad)
    {
      this.error = "Debes indicar tu nombre y Edad"
    } 
    else {
      this.router.navigate(["/categorias"]);
    }
    
  }

}
