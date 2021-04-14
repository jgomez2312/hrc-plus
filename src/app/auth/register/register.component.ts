import { Component, OnInit } from '@angular/core';
import { year } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  year = year;

  constructor() { }

  ngOnInit(): void {
  }

}
