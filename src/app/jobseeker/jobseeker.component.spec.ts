import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerComponent } from './jobseeker.component';

describe('JobseekerComponent', () => {
  let component: JobseekerComponent;
  let fixture: ComponentFixture<JobseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobseekerComponent]
    });
    fixture = TestBed.createComponent(JobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
