import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    //hace la peticion a la api
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category=' + parametros.categoria + '&apiKey=dcc75efe8f68498f88edd8b35495d3d2';

    //retorno el resultado de la llamada a la api
    return this.http.get(URL);
  }
}
