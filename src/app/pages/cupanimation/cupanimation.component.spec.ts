import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupanimationComponent } from './cupanimation.component';

describe('CupanimationComponent', () => {
  let component: CupanimationComponent;
  let fixture: ComponentFixture<CupanimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CupanimationComponent]
    });
    fixture = TestBed.createComponent(CupanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
