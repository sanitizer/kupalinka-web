import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTextComponent } from './contact-text.component';

describe('ContactTextComponent', () => {
  let component: ContactTextComponent;
  let fixture: ComponentFixture<ContactTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
