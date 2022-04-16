import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDisplayComponent } from './profiles-display.component';

describe('ProfilesDisplayComponent', () => {
  let component: ProfilesDisplayComponent;
  let fixture: ComponentFixture<ProfilesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
