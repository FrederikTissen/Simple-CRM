import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';



describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, Firestore],
      declarations: [UserComponent],
      providers: [{
        provide: MatDialogModule,
        useValue: {}
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
