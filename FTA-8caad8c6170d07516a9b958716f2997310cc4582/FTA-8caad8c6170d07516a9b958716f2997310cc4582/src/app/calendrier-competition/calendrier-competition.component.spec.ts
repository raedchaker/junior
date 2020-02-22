import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierCompetitionComponent } from './calendrier-competition.component';

describe('CalendrierCompetitionComponent', () => {
  let component: CalendrierCompetitionComponent;
  let fixture: ComponentFixture<CalendrierCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
