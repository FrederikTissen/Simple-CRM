import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { Firestore, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditBankDetailsComponent } from '../dialog-edit-bank-details/dialog-edit-bank-details.component';
import { DialogEditNoticeComponent } from '../dialog-edit-notice/dialog-edit-notice.component';
import { DialogEditFeedbackComponent } from '../dialog-edit-feedback/dialog-edit-feedback.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);

  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  docRef: any;


  userId: any;
  user: User = new User();
  docSnap: any;



  constructor(private route: ActivatedRoute, public dialog: MatDialog, private cd: ChangeDetectorRef) {


  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');

      console.log('Got ID', this.userId);
      this.getUser();
    })
  }


  async getUser() {
    this.docRef = doc(this.db, "users", this.userId);

    this.docSnap = await getDoc(this.docRef);
    this.user = this.docSnap.data();

    console.log('Got docSnap', this.user);
  }

  editUserDetail() {
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user);
    //dialog.componentInstance.user = this.user;
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  editBankDetails() {
    let dialog = this.dialog.open(DialogEditBankDetailsComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }


  editNotice() {
    let dialog = this.dialog.open(DialogEditNoticeComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  editFeedback() {
    let dialog = this.dialog.open(DialogEditFeedbackComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

}


