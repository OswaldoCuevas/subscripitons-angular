import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserPaymentsComponent } from './table-user-payments.component';

describe('TableUserPaymentsComponent', () => {
  let component: TableUserPaymentsComponent;
  let fixture: ComponentFixture<TableUserPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUserPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUserPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
