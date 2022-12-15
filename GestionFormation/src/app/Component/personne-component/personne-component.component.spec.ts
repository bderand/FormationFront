import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneComponentComponent } from './personne-component.component';

describe('PersonneComponentComponent', () => {
  let component: PersonneComponentComponent;
  let fixture: ComponentFixture<PersonneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
