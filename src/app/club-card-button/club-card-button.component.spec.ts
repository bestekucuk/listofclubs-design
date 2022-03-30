import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCardButtonComponent } from './club-card-button.component';

describe('ClubCardButtonComponent', () => {
  let component: ClubCardButtonComponent;
  let fixture: ComponentFixture<ClubCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
