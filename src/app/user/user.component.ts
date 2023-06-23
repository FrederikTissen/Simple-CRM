import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, getFirestore } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  firestore: Firestore = inject(Firestore);

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position: any = new FormControl(this.positionOptions[1]);

  user = new User();

  /*app = initializeApp(this.firestore.app.options);

  db = getFirestore(this.app);

  dbRef = collection(this.db, "users");*/


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log(this.dbRef);

    //this.firestore.collection('users').valueChanges()
      //.subscribe(value => this.content = value);

    /*this.dbRef.valueChanges.subscribe(value => {
      console.log(value);*/
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


}
