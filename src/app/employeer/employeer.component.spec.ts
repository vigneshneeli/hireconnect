import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerComponent } from './employeer.component';

describe('EmployeerComponent', () => {
  let component: EmployeerComponent;
  let fixture: ComponentFixture<EmployeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeerComponent]
    });
    fixture = TestBed.createComponent(EmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
