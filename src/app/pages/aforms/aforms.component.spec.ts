import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AformsComponent } from './aforms.component';

describe('AformsComponent', () => {
  let component: AformsComponent;
  let fixture: ComponentFixture<AformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AformsComponent]
    });
    fixture = TestBed.createComponent(AformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
