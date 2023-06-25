import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { Firestore, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

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



  constructor(private route: ActivatedRoute, public dialog: MatDialog) {


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
    dialog.componentInstance.user = this.user;
  }

  editMenu() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }
}


