import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VillanoModel } from "../models/villano.model";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  constructor(private _http: HttpClient) { }

  private url = 'https://pcaheroes-default-rtdb.firebaseio.com';
  
  crearVillano(villano: VillanoModel) {
    return this._http.post(`${this.url}/villano.json`, villano).pipe(
      map((resp: any) => {
        villano.id = resp.name;
        return villano;
      })
    );
  }

  actualizarVillano(villano: VillanoModel) {
    
    const villanoTemp = {
      ...villano
    }

    delete villanoTemp.id;

    return this._http.put(`${this.url}/villano/${villano.id}.json`, villanoTemp);

  }
 
  borrarVillano(id: string) {
    return this._http.delete(`${this.url}/villano/${id}.json`);
  }
   
  getVillano(id: string) {

    return this._http.get(`${this.url}/villano/${id}.json`);
  }

  getVillanos() {
    return this._http.get(`${this.url}/villano.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(heroesOBJ: object) {
    
    const villanos: VillanoModel[] = [];

    Object.keys(heroesOBJ).forEach(key => {
      const villano: VillanoModel = heroesOBJ[key];
      villano.id = key;

      villanos.push(villano);
    });

    if (heroesOBJ === null) { return []; }
    return villanos;

  }


}
