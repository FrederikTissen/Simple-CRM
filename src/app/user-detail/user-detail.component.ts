import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any;



  constructor(private route: ActivatedRoute) {


  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');

      console.log('Got ID', this.userId);
    })

    /*this.route.params.subscribe( params => {
     this.userId = params.get('id');
     console.log()
    }) */

  }

}