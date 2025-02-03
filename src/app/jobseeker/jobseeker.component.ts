import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent {

  username:null | undefined;
  password:null | undefined;
  email:null | undefined;
  phone:null | undefined;

message: string='';


constructor(private http: HttpClient){}
ngOnInit(): void {
 }
 checkLogin(){
  const user = { username: this.username, password: this.password ,email:this.email, phone:this.phone};
  this.http.post('http://localhost:8080/api/signUp', user, { responseType: 'text' })
      .subscribe(response => {
          this.message = response;
      }, error => {
          this.message = "Signup failed!";
      });
}
}
