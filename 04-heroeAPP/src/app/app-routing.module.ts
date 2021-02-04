import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";
import { VillanosComponent } from './pages/villanos/villanos.component';
import { VillanoComponent } from './pages/villano/villano.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'villanos', component: VillanosComponent },
  { path: 'villano/:id', component: VillanoComponent },
  { path:'**', pathMatch: 'full', redirectTo:'heroes'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
