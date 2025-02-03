import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.css']
})
export class EmployeerComponent {

  username:null | undefined;
  password:null | undefined;
  email:null | undefined;
  phone:null | undefined;
  companyname:null | undefined;

message: string='';


constructor(private http: HttpClient){}
ngOnInit(): void {
 }
 addSignUp(){
  const user = { username: this.username, password: this.password ,email:this.email, phone:this.phone, companyname:this.companyname};
  this.http.post('http://localhost:8080/api/sign', user, { responseType: 'text' })
      .subscribe(response => {
          this.message = response;
      }, error => {
          this.message = "Signup failed!";
      });
}

}
