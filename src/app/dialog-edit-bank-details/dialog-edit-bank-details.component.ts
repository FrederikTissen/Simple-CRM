import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-edit-bank-details',
  templateUrl: './dialog-edit-bank-details.component.html',
  styleUrls: ['./dialog-edit-bank-details.component.scss']
})
export class DialogEditBankDetailsComponent implements OnInit {
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  dbRef = collection(this.db, "users");
  userId!: string;
  docRef: any;
  updateData: any;
  user!: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditBankDetailsComponent>, private router: Router, private firestore: Firestore = inject(Firestore)) { }


  ngOnInit(): void { }

  //Update user data
  saveUser() {
    this.docRef = doc(this.db, "users", this.userId);
    this.updateData = this.user.toJSON();
    updateDoc(this.docRef, this.updateData)
      .then(() => {
        console.log('Data Updated', this.updateData);
        this.dialogRef.close()
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/']);
          this.router.navigate([`/user/${this.userId}`]);
        });
      })
      .catch((err) => {
        console.log(err);
        this.dialogRef.close()
      })
  }
}
