import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { year } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  year = year

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/');
  }

}
