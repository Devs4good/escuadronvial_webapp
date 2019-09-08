import { Injectable } from '@angular/core';
import { Categoria } from 'src/model/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CategoriasService {

  constructor(private http: HttpClient) {
   }

  getCategorias() : Observable<any>{
    let resp = this.http.get("https://rocky-ocean-09170.herokuapp.com/categorias/")
    return resp;
  }
}
