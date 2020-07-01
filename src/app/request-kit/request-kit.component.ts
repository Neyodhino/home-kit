import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-kit',
  templateUrl: './request-kit.component.html',
  styleUrls: ['./request-kit.component.scss']
})
export class RequestKitComponent implements OnInit {
  requestForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      MDCN_Number: ['', Validators.required],
      pickup_address: ['', Validators.required],
      pickup_date: ['', Validators.required],
    });
  }
}

