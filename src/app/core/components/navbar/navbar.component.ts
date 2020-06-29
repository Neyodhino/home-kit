import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LabPartnerComponent } from '../../../supplierDialog/lab-partner.component';
import { LoginComponent } from '../../../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }


  openDialog() {
    const dialogRef = this.dialog.open(LabPartnerComponent, {
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

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // if ( result ) {
      //   this.auth.login(JSON.parse(JSON.stringify(result))).subscribe(response => {
      //     console.log(response);
      //     if (!response['ok']) {
      //       this.notification.error(response['description'], 'Notification');
      //     } else {
      //       localStorage.setItem('loginDetails', JSON.stringify(response['description']));
      //       this.router.navigate(['/dashboard']);
      //       this.notification.success('Welcome to your dashboard', 'Notification');
      //     }
      //   },
      //   error => {
      //     console.log(error);
      //   });
      // }
    });
  }

}


