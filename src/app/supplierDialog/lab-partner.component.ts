import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-partner',
  templateUrl: './lap-partner.component.html',
  styleUrls: ['./lab-partner.component.scss']
})
export class LabPartnerComponent implements OnInit {

  labPartnerForm: FormGroup;
  constructor (
     private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.labPartnerForm = this.formBuilder.group({
      name_of_laboratory: ['', Validators.required],
      name_of_lab_representative: ['', Validators.required],
      contact_number: ['', Validators.required],
      contact_address: ['', Validators.required],
      estimated_clientele_base: ['', Validators.required],
      contact_email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }
}

