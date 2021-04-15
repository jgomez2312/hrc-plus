import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
