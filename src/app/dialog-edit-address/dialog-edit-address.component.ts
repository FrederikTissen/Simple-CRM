import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  dbRef = collection(this.db, "users");
  userId!: string;
  docRef: any;
  updateData: any;
  user!: User;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private router: Router, private firestore: Firestore = inject(Firestore)) { }


  ngOnInit(): void { }

  //Update user data
  saveUser() {
    this.docRef = doc(this.db, "users", this.userId);
    this.updateData = this.user.toJSON();
    updateDoc(this.docRef, this.updateData)
      .then(() => {
        this.dialogRef.close();
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



