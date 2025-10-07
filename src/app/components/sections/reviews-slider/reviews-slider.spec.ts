import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSlider } from './reviews-slider';

describe('ReviewsSlider', () => {
  let component: ReviewsSlider;
  let fixture: ComponentFixture<ReviewsSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
