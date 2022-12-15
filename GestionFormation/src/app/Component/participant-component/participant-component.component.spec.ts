import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantComponentComponent } from './participant-component.component';

describe('ParticipantComponentComponent', () => {
  let component: ParticipantComponentComponent;
  let fixture: ComponentFixture<ParticipantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
