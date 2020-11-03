import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderStatByCountryComponent } from './gender-stat-by-country.component';

describe('GenderStatByCountryComponent', () => {
  let component: GenderStatByCountryComponent;
  let fixture: ComponentFixture<GenderStatByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderStatByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderStatByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
