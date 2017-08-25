import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTextComponent } from './home-text.component';

describe('HomeTextComponent', () => {
  let component: HomeTextComponent;
  let fixture: ComponentFixture<HomeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
