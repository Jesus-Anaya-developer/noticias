import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  loading: boolean = false;
  alertaMensaje: boolean = false;

  listNoticias: any[] = [];

  constructor(private _noticiaService: NoticiasService) {

  }

  buscarNoticias(PARAMETROS: any) {
    this.loading = true;
    this.listNoticias = [];
    this.alertaMensaje = false;

    setTimeout(() => {
      //se pasan los parametros al servicio y con .subscribe te retorna el resultado
      this._noticiaService.getNoticias(PARAMETROS).subscribe(data => {
        this.loading = false;
        //con la arrow function obtienes los resultados de data
        this.listNoticias = data.articles;
        if (this.listNoticias.length == 0) {
          this.alertaMensaje = true;
        }
      }, error => {
        console.log(error);
        this.loading = false;
      });
    }, 1000);
  }
}
