import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialComponentComponent } from './commercial-component.component';

describe('CommercialComponentComponent', () => {
  let component: CommercialComponentComponent;
  let fixture: ComponentFixture<CommercialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
