import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaymentLogsComponent } from './table-payment-logs.component';

describe('TablePaymentLogsComponent', () => {
  let component: TablePaymentLogsComponent;
  let fixture: ComponentFixture<TablePaymentLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaymentLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaymentLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
