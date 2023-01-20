import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentLogComponent } from './add-payment-log.component';

describe('AddPaymentLogComponent', () => {
  let component: AddPaymentLogComponent;
  let fixture: ComponentFixture<AddPaymentLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
