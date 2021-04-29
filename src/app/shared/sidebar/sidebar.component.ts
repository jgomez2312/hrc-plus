import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItens: any[];

  constructor( private sidebarService: SidebarService) {
    this.menuItens = sidebarService.menu;
    console.log(this.menuItens);
   }

  ngOnInit(): void {
  }

}
