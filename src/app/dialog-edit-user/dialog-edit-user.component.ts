import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  dbRef = collection(this.db, "users");
  
  userId!: string;

  user!: User;

  loading = false;

  docRef: any;
  updateData: any;




  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

  }

  ngOnInit(): void {
    
  }

  saveUser() {

    this.docRef = doc(this.db, "users", this.userId);
    this.updateData = this.user.toJSON();

    updateDoc(this.docRef, this.updateData)
    .then(()=> {
      console.log('Data Updated', this.updateData);
      this.dialogRef.close()
    })
    .catch((err)=> {
      console.log(err);
      this.dialogRef.close()
    })
  }

}
