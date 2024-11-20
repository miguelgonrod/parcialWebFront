import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarRegistroComponent } from './insertar-registro/insertar-registro.component';
import { MostrarRegistrosComponent } from './mostrar-registros/mostrar-registros.component';

const routes: Routes = [
  { path: '', redirectTo: '/insertar', pathMatch: 'full' },
  { path: 'insertar', component: InsertarRegistroComponent },
  { path: 'mostrar', component: MostrarRegistrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
