import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any[]=[];

 
    username:null | undefined;
    password:null | undefined;
  message: any='';
  
  res={
    username:null,
    password:null,
    companyname:null,
    email:null,
    phoneno:null

  }

  constructor(private dataService:DataService,private http: HttpClient,private route:Router){}
  ngOnInit(): void {
   }
   checkLogin(){
    const user = { username: this.username, password: this.password };
    this.http.post<any>('http://localhost:8080/api/login', user)
        .subscribe(response => {
       this.res=response;
       console.log(response);

       if(this.res.companyname!=null)
       {
           this.route.navigate(['employeer-portal'])
       }
       else
       {
        this.route.navigate(['index-page']);
       }

        }, error => {
            this.message = "login failed!";
        });
  }


}
