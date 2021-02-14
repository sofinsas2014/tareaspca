import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HeroeModel } from '../models/heroe.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //private url = 'https://pcaheroes-default-rtdb.firebaseio.com';
  private url= 'https://finalpca-2f031-default-rtdb.firebaseio.com';
  constructor(private httpCliente: HttpClient) { }
  
  getHeroes() {
    return this.httpCliente.get(`${this.url}/heroe.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(heroesOBJ: object) {
    
    const heroes: HeroeModel[] = [];

    Object.keys(heroesOBJ).forEach(key => {
      const heroe: HeroeModel = heroesOBJ[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    if (heroesOBJ === null) { return []; }
    return heroes;

  }

}
