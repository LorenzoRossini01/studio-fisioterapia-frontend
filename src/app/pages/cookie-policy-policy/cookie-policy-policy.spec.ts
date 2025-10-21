import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePolicyPolicy } from './cookie-policy-policy';

describe('CookiePolicyPolicy', () => {
  let component: CookiePolicyPolicy;
  let fixture: ComponentFixture<CookiePolicyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiePolicyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiePolicyPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
