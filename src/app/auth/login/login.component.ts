import { Component, OnInit } from '@angular/core';
import { year } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  year = year

  constructor() { }

  ngOnInit(): void {
  }

}
