import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'fa fa-th-large',
      menu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'ProgressBar', url: 'progress'},
        { titulo: 'Grafica 1', url: 'grafica1'},
      ]
    }
  ]

  constructor() { }
}
