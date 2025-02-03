import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from 'src/index-page/index-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { FormsModule } from '@angular/forms';
import { EmployeerPortalComponent } from './employeer-portal/employeer-portal.component';
import { PostJobComponent } from './post-job/post-job.component';
import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployeerComponent } from './employeer/employeer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ApplyPageComponent,
    EmployeerPortalComponent,
    PostJobComponent,
    LoginComponent,
    JobseekerComponent,
    EmployeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
