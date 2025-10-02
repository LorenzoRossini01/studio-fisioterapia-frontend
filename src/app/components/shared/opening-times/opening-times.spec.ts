import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningTimes } from './opening-times';

describe('OpeningTimes', () => {
  let component: OpeningTimes;
  let fixture: ComponentFixture<OpeningTimes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningTimes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningTimes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
