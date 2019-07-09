import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendResultComponent } from './trend-result.component';

describe('TrendResultComponent', () => {
  let component: TrendResultComponent;
  let fixture: ComponentFixture<TrendResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
