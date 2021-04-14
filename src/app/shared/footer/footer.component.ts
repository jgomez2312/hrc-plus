import { Component, OnInit } from '@angular/core';
import { year } from '../../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  year = year;

  constructor() { }

  ngOnInit(): void {
  }

}
