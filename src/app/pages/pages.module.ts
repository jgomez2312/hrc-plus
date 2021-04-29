import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccounSettingsComponent } from './accoun-settings/accoun-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent,
    AccounSettingsComponent
  ],
  exports:[
    DashboardComponent,
    ProgessComponent,
    Grafica1Component,
    PagesComponent,
    AccounSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
