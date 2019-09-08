import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http: HttpClient) { }

  getPreguntas() {
    let resp = this.http.get("https://rocky-ocean-09170.herokuapp.com/preguntas/")
    return resp;
  }

  getRespuestas() {
    let resp = this.http.get("https://rocky-ocean-09170.herokuapp.com/respuestas/")
    return resp;
  }
}
