import { Component, OnInit,Input } from '@angular/core';
import { PersonajeModel } from 'src/app/models/personaje.model';
import { ActionSheetController } from '@ionic/angular';
import { HeroesService } from '../../services/heroes.service';
import { DatosLocalService } from '../../services/datos-local.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {

  @Input() personaje: PersonajeModel;
  @Input() tipo: string;
  @Input() esfavorito = false;

  enFavoritos = false;
  constructor(private datosLocalService: DatosLocalService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}


  async lanzarMenup(personaje: PersonajeModel, tipo: string) {

    let guardarBorrarBtn;


    if (!this.enFavoritos) {
      guardarBorrarBtn = 
      {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          
          this.datosLocalService.guardarDatatore(personaje, tipo);
        }
      }
    } else {
    guardarBorrarBtn = 
      {  text: 'Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
         // this.datalocalService.borrarNoticias(this.noticia);
        }
      };

    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [ 
        guardarBorrarBtn
      , 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
