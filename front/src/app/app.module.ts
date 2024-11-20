import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarRegistroComponent } from './insertar-registro/insertar-registro.component';
import { MostrarRegistrosComponent } from './mostrar-registros/mostrar-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarRegistroComponent,
    MostrarRegistrosComponent
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
