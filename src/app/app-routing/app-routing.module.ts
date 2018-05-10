import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfowindowComponent} from '../infowindow/infowindow.component';
const routes: Routes = [
    {
        path: 'info/:id',
        component: InfowindowComponent
      }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
