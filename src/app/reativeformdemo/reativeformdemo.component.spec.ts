import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeformdemoComponent } from './reativeformdemo.component';

describe('ReativeformdemoComponent', () => {
  let component: ReativeformdemoComponent;
  let fixture: ComponentFixture<ReativeformdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeformdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
