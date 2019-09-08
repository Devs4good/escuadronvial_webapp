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
  error = false;
  edad ='';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  llenarDatos(f) {
    const data = f.value;
    if (!data.nombre || !data.edad)
    {
      this.error = true;
    } 
    else {
      this.error = false;
      this.router.navigate(["/categorias"]);
    }
    
  }

}
