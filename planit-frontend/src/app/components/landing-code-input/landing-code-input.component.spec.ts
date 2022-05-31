import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCodeInputComponent } from './landing-code-input.component';

describe('LandingCodeInputComponent', () => {
  let component: LandingCodeInputComponent;
  let fixture: ComponentFixture<LandingCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingCodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
