import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class DatosLocalService {


   personajes: HeroeModel[] = [];

  constructor() { }


  guardarDatatore( personaje: HeroeModel, tipo: string) {
    // console.log('Noticias Favoritas ',this.noticias);

      const existe = this.personajes.find(perso => perso.id === personaje.id);
      console.log('esta gusrando' + personaje.nombre + ' '+ JSON.stringify(this.personajes));
      if (!existe) {
        personaje.tipo = tipo;
      this.personajes.unshift(personaje);
          Storage.set({
             key: 'favoritos',
             value: JSON.stringify(this.personajes)
          });
     }
     console.log('esta gusrando' + personaje.nombre + ' '+JSON.stringify(this.personajes));
     //this.presentToast( 'Se guardo en favoritos' );
  }

  

}
