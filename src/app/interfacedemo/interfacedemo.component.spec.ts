import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacedemoComponent } from './interfacedemo.component';

describe('InterfacedemoComponent', () => {
  let component: InterfacedemoComponent;
  let fixture: ComponentFixture<InterfacedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
