import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent {

  username:any=null;
  ngOnInit(): void {
    console.log("Username:", this.username); // Print username in console
  }

}
