import { Component } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  job = {
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    location: '',
    salary: ''
  };

  addJob() {}
}
