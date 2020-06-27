import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestKitComponent } from '../request-kit/request-kit.component';
import { Router }from '@angular/router'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  direction = faArrowAltCircleDown

  constructor (
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RequestKitComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.dataService.registerLabPartner(JSON.parse(JSON.stringify(result))).subscribe(response => {
      //     if (!response['ok']) {
      //       this.notification.error('An error occurred, please try again.', 'Notification');
      //     } else {
      //       this.notification.success('Registration successful. An email has been sent to your email address', 'Notification');
      //     }
      //   }, error => {
      //     console.log(error);
      //   });
      // }
      console.log(result);
    });
  }

  route():void {
    this.router.navigate(['/waiting'])
  }

}

