import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListMenuComponent } from './project-list-menu.component';

describe('ProjectListViewComponent', () => {
  let component: ProjectListMenuComponent;
  let fixture: ComponentFixture<ProjectListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
