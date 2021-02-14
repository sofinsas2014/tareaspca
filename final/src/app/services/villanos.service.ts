import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VillanoModel } from '../models/villano.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  //private url = 'https://pcaheroes-default-rtdb.firebaseio.com';
  private url =  'https://finalpca-2f031-default-rtdb.firebaseio.com';
  constructor(private httpCliente: HttpClient) { }

  getVillanos() {
    return this.httpCliente.get(`${this.url}/villano.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(villanoOBJ: object) {
    
    const villanos: VillanoModel[] = [];

    Object.keys(villanoOBJ).forEach(key => {
      const villano: VillanoModel = villanoOBJ[key];
      villano.id = key;
      villanos.push(villano);
    });

    if (villanoOBJ === null) { return []; }
    return villanos;

  }

}
