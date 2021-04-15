// Modulos generales.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos personalizados.
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

// Componentes personalizados.
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

  // Informacion general
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule

  // Rutas generales
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotpagefoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
