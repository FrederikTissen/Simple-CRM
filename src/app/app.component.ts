import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DescriptionComponent } from './description/description.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';

  login: boolean = true;
  signUp: boolean = false;
  loginBackground: boolean = true;


  constructor(public dialog: MatDialog) {
    //this.openDescription();
    //this.openLogin();
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


}
