import { Component, Input, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DescriptionComponent } from './description/description.component';
import { LoginComponent } from './login/login.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { UserLogin } from 'src/models/userLogin.class';
import { Observable } from 'rxjs';
import { UserProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('loginEmail') loginEmail: any;
  @ViewChild('loginPassword') loginPassword: any;
  @ViewChild('email') emailInput: any;
  @ViewChild('password') passwordInput: any;

  private firestore: Firestore = inject(Firestore);
  app = initializeApp(this.firestore.app.options);
  db = getFirestore(this.app);

  userLogin = new UserLogin();
  userLogin$!: Observable<UserProfile[]>;
  title = 'simple-crm';
  allUserLogin: any = [];


  dbRef: any;


  login: boolean = true;
  signUp: boolean = false;
  loginBackground: boolean = true;


  constructor(public dialog: MatDialog) {
    this.openDescription();
    //this.openLogin();
    this.dbRef = collection(this.firestore, 'userLogin');
    
    this.userLogin$ = collectionData(this.dbRef, { idField: 'id'}) as Observable<UserProfile[]>;

    this.userLogin$.subscribe((changes: any) => {
      this.allUserLogin = changes;
    console.log(this.allUserLogin);

    });



  }


  openLegalNotice() {
    let dialog = this.dialog.open(LegalNoticeComponent);
  }

  openPrivacyPolicy() {
    let dialog = this.dialog.open(PrivacyPolicyComponent);
  }

  openDescription() {
    let dialog = this.dialog.open(DescriptionComponent);
  }

  openLogin() {
    let dialog = this.dialog.open(LoginComponent);
  }

  openSignIn() {
    this.login = false;
    this.signUp = true;
  }

  closeSignIn() {
    this.login = true;
    this.signUp = false;
  }


  async saveUserLogin() {
    //await setDoc(doc(this.db, "userLogin", "newUser"), this.userLogin.toJSON());



    this.dbRef = collection(this.db, 'userLogin');


    this.userLogin$ = collectionData(this.dbRef, { idField: 'id' }) as Observable<UserProfile[]>;

    this.userLogin$.subscribe((changes: any) => {
      this.allUserLogin = changes;
      console.log('Login', this.allUserLogin);
    });

    //console.log('before', this.userLogin);


    addDoc(this.dbRef, this.userLogin.toJSON())
      .then(docRef => {
        //this.loading = false;
        this.clearAllFields();

        setTimeout(() => {
          this.closeSignIn();
        }, 1000);
        //console.log('allLogin users', this.allUserLogin);
      })
  }

  clearAllFields() {
    this.userLogin.firstName = '';
    this.userLogin.lastName = '';
    this.userLogin.email = '';
    this.userLogin.password = '';
  }


  loginApp() {
    let email: string = this.loginEmail.nativeElement.value;
    let passwort = this.loginPassword.nativeElement.value;

    for (let i = 0; i < this.allUserLogin.length; i++) {
      const element = this.allUserLogin[i];


      if (element.email == email) {
  
        if (element.password == passwort) {
          this.login = false;
          this.loginBackground = false;
        }
      } else {
        console.log('Login failed');
      }
    }

    //console.log('all searched emails', searchedEmail);

    //console.log(searchedUser);
    //console.log(this.allUserLogin);
  }
}
