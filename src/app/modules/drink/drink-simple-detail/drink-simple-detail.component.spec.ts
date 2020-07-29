import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSimpleDetailComponent } from './drink-simple-detail.component';

describe('DrinkSimpleDetailComponent', () => {
  let component: DrinkSimpleDetailComponent;
  let fixture: ComponentFixture<DrinkSimpleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSimpleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSimpleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
