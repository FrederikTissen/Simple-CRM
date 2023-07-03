import { Component, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  user = new User();
  birthDateUser: Date = new Date;
  date: any;
  loading = false;
  dbRef = collection(this.db, "users");


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore = inject(Firestore)) {}
  
  async saveUser() {
    this.user.birthDate = this.birthDateUser.getTime();
    this.loading = true;

    addDoc(this.dbRef, this.user.toJSON())
      .then(docRef => {
        this.loading = false;
        console.log("Document has been added successfully");
        this.dialogRef.close();
      })
  }
}
