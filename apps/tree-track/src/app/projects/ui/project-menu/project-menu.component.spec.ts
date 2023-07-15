import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMenuComponent } from './project-menu.component';

describe('ProjectMenuComponent', () => {
  let component: ProjectMenuComponent;
  let fixture: ComponentFixture<ProjectMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMenuComponent]
    });
    fixture = TestBed.createComponent(ProjectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
