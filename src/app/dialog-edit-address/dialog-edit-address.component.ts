import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';


import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);
  dbRef = collection(this.db, "users");
  
  userId!: string;



  docRef: any;
  updateData: any;




  user!: User;

  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

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



