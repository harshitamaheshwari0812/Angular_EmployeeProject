import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvdemoComponent } from './trvdemo.component';

describe('TrvdemoComponent', () => {
  let component: TrvdemoComponent;
  let fixture: ComponentFixture<TrvdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrvdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrvdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
