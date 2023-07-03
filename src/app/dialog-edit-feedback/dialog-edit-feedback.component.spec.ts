import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditFeedbackComponent } from './dialog-edit-feedback.component';

describe('DialogEditFeedbackComponent', () => {
  let component: DialogEditFeedbackComponent;
  let fixture: ComponentFixture<DialogEditFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
