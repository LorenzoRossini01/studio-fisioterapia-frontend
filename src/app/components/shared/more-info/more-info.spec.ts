import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfo } from './more-info';

describe('MoreInfo', () => {
  let component: MoreInfo;
  let fixture: ComponentFixture<MoreInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
