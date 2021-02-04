import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VillanosComponent } from './pages/villanos/villanos.component';
import { VillanoComponent } from './pages/villano/villano.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    NavbarComponent,
    VillanosComponent,
    VillanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
