import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProjectsPageComponent } from './web-projects-page.component';

describe('WebProjectsPageComponent', () => {
  let component: WebProjectsPageComponent;
  let fixture: ComponentFixture<WebProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
