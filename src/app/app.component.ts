import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job-Portal-Front-End';
  constructor(private router:Router) {
    this.router.navigate(['login']);
  }
  
}
