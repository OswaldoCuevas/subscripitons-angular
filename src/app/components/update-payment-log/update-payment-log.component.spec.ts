import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentLogComponent } from './update-payment-log.component';

describe('UpdatePaymentLogComponent', () => {
  let component: UpdatePaymentLogComponent;
  let fixture: ComponentFixture<UpdatePaymentLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
