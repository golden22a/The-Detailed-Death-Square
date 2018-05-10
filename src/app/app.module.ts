import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TieFighterComponent} from './tie-fighter/tie-fighter.component';
import {InternalDefensesModule} from './internal-defenses/internal-defenses.module';
import { InfowindowComponent } from './infowindow/infowindow.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfowindowComponent

  ],
  imports: [
    BrowserModule,
    InternalDefensesModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
