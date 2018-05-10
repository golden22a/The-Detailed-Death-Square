import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TurretComponent} from './turret/turret.component';
import {LaserCannonComponent} from "./laser-cannon/laser-cannon.component";
import {DeathSquareComponent} from './death-square/death-square.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TurretComponent,
    LaserCannonComponent,
    DeathSquareComponent

  ],
  exports:[
    TurretComponent,
    LaserCannonComponent,
    DeathSquareComponent
  ]
})
export class InternalDefensesModule { }
