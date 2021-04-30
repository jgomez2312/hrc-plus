 // Modulos generales
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes personalizados
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgessComponent } from './progess/progess.component';
import { AccounSettingsComponent } from './accoun-settings/accoun-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component:DashboardComponent, data:{titulo: 'Dashboard'}},
          { path: 'progress', component: ProgessComponent, data:{titulo: 'Progress'}},
          { path: 'grafica1', component: Grafica1Component, data:{titulo: 'Grafica1'}},
          { path: 'account-settings', component: AccounSettingsComponent, data:{titulo: 'Account Settings'}},
          { path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'}},
          { path: 'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs'}},
        ]
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
