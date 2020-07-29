import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSimpleDetailListComponent } from './drink-simple-detail-list.component';

describe('DrinkSimpleDetailListComponent', () => {
  let component: DrinkSimpleDetailListComponent;
  let fixture: ComponentFixture<DrinkSimpleDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSimpleDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSimpleDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
