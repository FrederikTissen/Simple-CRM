import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';


  constructor(public dialog: MatDialog) {
    this.openDescription();
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


}
