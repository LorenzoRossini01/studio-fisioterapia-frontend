import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiSonoHome } from './chi-sono-home';

describe('ChiSonoHome', () => {
  let component: ChiSonoHome;
  let fixture: ComponentFixture<ChiSonoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiSonoHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ChiSonoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
