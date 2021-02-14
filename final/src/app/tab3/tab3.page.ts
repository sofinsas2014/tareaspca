import { Component } from '@angular/core';
import { DatosLocalService } from '../services/datos-local.service';
import { PersonajeModel } from '../models/personaje.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  personajes: PersonajeModel[] = [];
  enFavoritos = false;
  //tipo: string = 'V';
 

  constructor(public datosLocalService: DatosLocalService) {}

}
