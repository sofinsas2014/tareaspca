import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { VillanoModel } from '../../models/villano.model';
import { VillanosService } from '../../services/villanos.service';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
  villano = new VillanoModel();

  constructor(private _villanoServices: VillanosService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this._route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this._villanoServices.getVillano(id).subscribe((resp: VillanoModel) => {
        this.villano = resp;
        this.villano.id = id;
      });
    }
  }

  guardar( form: NgForm) {
    
    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    } 
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick:false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.villano.id) {
      peticion = this._villanoServices.actualizarVillano(this.villano);
    } else {
      peticion = this._villanoServices.crearVillano(this.villano);
    }
    
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.villano.nombre,
        text: 'Se actualizo Correctamente'
      });
    } )


  }

}
