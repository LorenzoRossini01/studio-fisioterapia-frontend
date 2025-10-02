import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfos } from './service-infos';

describe('ServiceInfos', () => {
  let component: ServiceInfos;
  let fixture: ComponentFixture<ServiceInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceInfos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceInfos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
