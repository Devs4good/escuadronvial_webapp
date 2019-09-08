import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias =[];

  constructor(
    private router: Router,
    private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log(this.categorias);
      this.categorias = this.categorias.filter(x => x.nombre != "Otros" && x.nombre != "Aleatorio");
    }); 
  }

  jugar= function () {
    this.router.navigateByUrl('/pregunta');
  };
}
