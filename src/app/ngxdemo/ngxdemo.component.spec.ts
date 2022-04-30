import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxdemoComponent } from './ngxdemo.component';

describe('NgxdemoComponent', () => {
  let component: NgxdemoComponent;
  let fixture: ComponentFixture<NgxdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
