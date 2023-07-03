import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailChartComponent } from './email-chart.component';

describe('EmailChartComponent', () => {
  let component: EmailChartComponent;
  let fixture: ComponentFixture<EmailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
