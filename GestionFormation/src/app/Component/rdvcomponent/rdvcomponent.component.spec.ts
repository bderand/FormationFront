import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDVComponentComponent } from './rdvcomponent.component';

describe('RDVComponentComponent', () => {
  let component: RDVComponentComponent;
  let fixture: ComponentFixture<RDVComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDVComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RDVComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
