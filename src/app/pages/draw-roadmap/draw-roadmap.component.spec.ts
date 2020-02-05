import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawRoadmapComponent } from './draw-roadmap.component';

describe('DrawRoadmapComponent', () => {
  let component: DrawRoadmapComponent;
  let fixture: ComponentFixture<DrawRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
