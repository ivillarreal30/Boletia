import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ComisionesComponent }   from './components/comisiones/comisiones.component';
import { EventosComponent }      from './components/eventos/eventos.component';
import { OrganizadoresComponent }  from './components/organizadores/organizadores.component';
import { HomeComponent }  from './components/home/home.component';
import { CompraBoletosComponent }  from './components/compra-boletos/compra-boletos.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'organizadores', component: OrganizadoresComponent },
  { path: 'comisiones', component: ComisionesComponent },
  { path: 'evento/:id', component: CompraBoletosComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}