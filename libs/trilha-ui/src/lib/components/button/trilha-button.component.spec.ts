import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhaButtonComponent } from './trilha-button.component';

describe('ButtonComponent', () => {
  let component: TrilhaButtonComponent;
  let fixture: ComponentFixture<TrilhaButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrilhaButtonComponent]
    });
    fixture = TestBed.createComponent(TrilhaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
