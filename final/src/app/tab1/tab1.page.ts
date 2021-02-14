import { Component, OnInit  } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { DatosLocalService } from '../services/datos-local.service';
import { HeroeModel } from '../models/heroe.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  heroes: HeroeModel[] = [];
  enFavoritos = false;
  tipo: string = 'H';
  constructor(private datosLocalService: DatosLocalService,private heroeServices: HeroesService 
        )  {}

  ngOnInit(): void {
    this.heroeServices.getHeroes().subscribe(resp => {
    this.heroes = resp;
      //this.cargando = false;
    });

  }


}
