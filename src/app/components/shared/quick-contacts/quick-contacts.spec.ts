import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickContacts } from './quick-contacts';

describe('QuickContacts', () => {
  let component: QuickContacts;
  let fixture: ComponentFixture<QuickContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
