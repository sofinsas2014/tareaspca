import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeComponent } from './personaje/personaje.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PersonajeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PersonajeComponent
  ]
})
export class ComponentsModule { }