// Modulos Generales
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos de la Aplicacion.
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

// Componentes principales.
import { AppComponent } from './app.component';

// Componentes personalizados.
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
