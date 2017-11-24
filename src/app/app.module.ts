import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizadoresComponent } from './components/organizadores/organizadores.component';
import { ComisionesComponent } from './components/comisiones/comisiones.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CompraBoletosComponent } from './components/compra-boletos/compra-boletos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrganizadoresComponent,
    ComisionesComponent,
    EventosComponent,
    HomeComponent,
    CompraBoletosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
