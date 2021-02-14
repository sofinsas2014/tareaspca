import { Component,OnInit } from '@angular/core';
import { VillanosService } from '../services/villanos.service';
import { DatosLocalService } from '../services/datos-local.service';
import { VillanoModel } from '../models/villano.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  villanos: VillanoModel[] = [];
  enFavoritos = false;
  tipo: string = 'V';
  constructor( private datosLocalService: DatosLocalService,private villanosServices: VillanosService) {}

  ngOnInit(): void {
    this.villanosServices.getVillanos().subscribe(resp => {
    this.villanos = resp;
      
    });

}

}