import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifelsets1Component } from './ifelsets1.component';

describe('Ifelsets1Component', () => {
  let component: Ifelsets1Component;
  let fixture: ComponentFixture<Ifelsets1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ifelsets1Component]
    });
    fixture = TestBed.createComponent(Ifelsets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
