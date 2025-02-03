import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { EmployeerPortalComponent } from './employeer-portal/employeer-portal.component';
import { IndexPageComponent } from 'src/index-page/index-page.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'apply-job',component:ApplyPageComponent},
  {path:'employeer-portal',component:EmployeerPortalComponent},
  {path:'index-page',component:IndexPageComponent},
  {path:'post-job',component:PostJobComponent},
  {path:'job-seeker',component:JobseekerComponent},
  {path:'employeer',component:EmployeerComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
