import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementComponentComponent } from './paiement-component.component';

describe('PaiementComponentComponent', () => {
  let component: PaiementComponentComponent;
  let fixture: ComponentFixture<PaiementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
