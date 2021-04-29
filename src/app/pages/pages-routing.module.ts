 // Modulos generales
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes personalizados
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgessComponent } from './progess/progess.component';
import { AccounSettingsComponent } from './accoun-settings/accoun-settings.component';


const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component:DashboardComponent},
          { path: 'progress', component: ProgessComponent},
          { path: 'grafica1', component: Grafica1Component},
          { path: 'account-settings', component: AccounSettingsComponent},
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
