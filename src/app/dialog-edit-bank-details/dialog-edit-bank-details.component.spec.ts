import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBankDetailsComponent } from './dialog-edit-bank-details.component';

describe('DialogEditBankDetailsComponent', () => {
  let component: DialogEditBankDetailsComponent;
  let fixture: ComponentFixture<DialogEditBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
