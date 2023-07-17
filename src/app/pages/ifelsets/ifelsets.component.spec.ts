import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsetsComponent } from './ifelsets.component';

describe('IfelsetsComponent', () => {
  let component: IfelsetsComponent;
  let fixture: ComponentFixture<IfelsetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfelsetsComponent]
    });
    fixture = TestBed.createComponent(IfelsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
