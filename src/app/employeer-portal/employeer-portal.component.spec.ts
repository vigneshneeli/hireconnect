import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerPortalComponent } from './employeer-portal.component';

describe('EmployeerPortalComponent', () => {
  let component: EmployeerPortalComponent;
  let fixture: ComponentFixture<EmployeerPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerPortalComponent]
    });
    fixture = TestBed.createComponent(EmployeerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
