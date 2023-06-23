import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);

  app = initializeApp(this.firestore.app.options);

  db = getFirestore(this.app);

  user = new User();
  birthDateUser: Date = new Date;
  date: any;



  constructor() {

  }

  async saveUser() {
    this.user.birthDate = this.birthDateUser.getTime();
    console.log('Current user is', this.user);
    console.log('Current firestore is', this.firestore.app.options);
    console.log('Current db is', this.db);


    debugger;
    /*await setDoc(doc(this.firestore, "cities", "LA"), {
      user.toJson()
    });*/

    await setDoc(doc(this.db, "users", "one"), this.user.toJSON);

    //const aCollection = collection(this.firestore, 'users')
    //this.users$ = collectionData(aCollection);

  }

}
