import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent  implements OnInit   {

  data: any[] = []; // To store the fetched data
selectedJob:any=null;
  constructor(private dataService: DataService,private router:Router) {}
  ngOnInit(): void {
   this.dataService.getData().subscribe(
    (response)=>{
      this.data=response;
    },
    (error) => {
      console.error('Error fetching data', error);
    },
   )
  }
  selectJob(job: any) {
    this.selectedJob = job; // Store the clicked job
}
applyJob(){
  this.router.navigate(['apply-job']);
}

}
