import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcontactdetailsComponent } from './empcontactdetails.component';

describe('EmpcontactdetailsComponent', () => {
  let component: EmpcontactdetailsComponent;
  let fixture: ComponentFixture<EmpcontactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcontactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
