import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TurretComponent} from './turret/turret.component';
import {LaserCannonComponent} from "./laser-cannon/laser-cannon.component";
import {DeathSquareComponent} from './death-square/death-square.component';
@NgModule({
  imports: [
    CommonModule
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
