import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentazioneAbout } from './presentazione-about';

describe('PresentazioneAbout', () => {
  let component: PresentazioneAbout;
  let fixture: ComponentFixture<PresentazioneAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentazioneAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentazioneAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
