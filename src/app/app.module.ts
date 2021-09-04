import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
// Components
import { BuscarComponent } from './components/buscar/buscar.component';
import { ListadoImagenesComponent } from './components/listado-imagenes/listado-imagenes.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ListadoImagenesComponent,
    SpinnerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
