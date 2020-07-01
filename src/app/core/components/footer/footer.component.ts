import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;

  love = faHeart;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private notification: ToastrService
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit (formValue) {
    this.contactForm.reset();
    this.dataService.contactUs(formValue).subscribe(response => {
      console.log(response);
      this.notification.success('Thank you for contacting us')
    },
    error => {
      console.log(error)
      this.notification.error('An error occured, please try again');
    })
  }

}

