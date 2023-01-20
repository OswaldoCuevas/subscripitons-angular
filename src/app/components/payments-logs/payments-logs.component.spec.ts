import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsLogsComponent } from './payments-logs.component';

describe('PaymentsLogsComponent', () => {
  let component: PaymentsLogsComponent;
  let fixture: ComponentFixture<PaymentsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
