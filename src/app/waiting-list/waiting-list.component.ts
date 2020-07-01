import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabPartnerComponent } from '../supplierDialog/lab-partner.component';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../core/services/data.service';
import { AuthenticationService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  waitingListForm: FormGroup;
  showMessage = false;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: ToastrService,
    private auth: AuthenticationService,
    private dataService: DataService
  ) {
   }

  ngOnInit(): void {
    this.waitingListForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      email_address: ['', [Validators.required, Validators.email]],
      pickup_address: ['', Validators.required],
      delivery_address: ['', Validators.required],
      number_of_kits: ['', Validators.required],
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(LabPartnerComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.registerLabPartner(JSON.parse(JSON.stringify(result))).subscribe(response => {
          if (!response['ok']) {
            this.notification.error('An error occurred, please try again.', 'Notification');
          } else {
            this.notification.success('Registration successful. An email has been sent to your email address', 'Notification');
          }
        }, error => {
          console.log(error);
        });
      }
      console.log(result);
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        this.auth.login(JSON.parse(JSON.stringify(result))).subscribe(response => {
          if (!response['ok']) {
            this.notification.error(response['description'], 'Notification');
          } else {
            localStorage.setItem('loginDetails', JSON.stringify(response['description']));
            this.router.navigate(['/dashboard']);
            this.notification.success('Welcome to your dashboard', 'Notification');
          }
        },
        error => {
          console.log(error);
        });
      }
    });
  }

  onSubmit(formValue) {
    this.dataService.requestWaitingList(formValue).subscribe(response => {
      console.log(response);
      this.showMessage = true;
    }, error => {
      console.log(error);
    });
  }
}
