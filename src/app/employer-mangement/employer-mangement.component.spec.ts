import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerMangementComponent } from './employer-mangement.component';

describe('EmployerMangementComponent', () => {
  let component: EmployerMangementComponent;
  let fixture: ComponentFixture<EmployerMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerMangementComponent]
    });
    fixture = TestBed.createComponent(EmployerMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
