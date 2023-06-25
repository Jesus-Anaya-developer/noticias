import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mxn';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'travel', nombre: 'turismo' },
  ]

  paises: any[] = [
    { value: 'arg', nombre: 'Argentina' },
    { value: 'mxn', nombre: 'Mexico' },
    { value: 'bra', nombre: 'Brazil' },
  ]

  buscarNoticia() {
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }

}
