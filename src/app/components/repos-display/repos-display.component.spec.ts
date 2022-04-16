import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposDisplayComponent } from './repos-display.component';

describe('ReposDisplayComponent', () => {
  let component: ReposDisplayComponent;
  let fixture: ComponentFixture<ReposDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
