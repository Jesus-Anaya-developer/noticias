import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';

  listNoticias: any[] = [];

  constructor(private _noticiaService: NoticiasService) {

  }

  buscarNoticias(PARAMETROS: any) {
    //se pasan los parametros al servicio y con .subscribe te retorna el resultado
    this._noticiaService.getNoticias(PARAMETROS).subscribe(data => {
      //con la arrow function obtienes los resultados de data
      this.listNoticias = data.articles;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
