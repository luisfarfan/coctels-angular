import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkFullDetailComponent } from './drink-full-detail.component';

describe('DrinkFullDetailComponent', () => {
  let component: DrinkFullDetailComponent;
  let fixture: ComponentFixture<DrinkFullDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkFullDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
