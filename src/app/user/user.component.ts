import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData, getDocs, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserProfile } from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})


export class UserComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position: any = new FormControl(this.positionOptions[1]);

  user = new User();
  users$: Observable<UserProfile[]>;
  allUsers: any = [];

  colRef: any;



  constructor(public dialog: MatDialog, private route: ActivatedRoute) {

    this.colRef = collection(this.firestore, 'users');
    
    this.users$ = collectionData(this.colRef, { idField: 'id'}) as Observable<UserProfile[]>;

    this.users$.subscribe((changes: any) => {
      this.allUsers = changes;
    });
  }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}




