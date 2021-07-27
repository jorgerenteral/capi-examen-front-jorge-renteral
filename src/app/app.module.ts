import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosModule } from './usuarios/usuarios.module';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeEsExtra from '@angular/common/locales/extra/es-MX';

registerLocaleData(localeEs, 'es', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
