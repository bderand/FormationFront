import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurComponentComponent } from './formateur-component.component';

describe('FormateurComponentComponent', () => {
  let component: FormateurComponentComponent;
  let fixture: ComponentFixture<FormateurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
