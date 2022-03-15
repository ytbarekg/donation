import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryApiServiceService } from '../beneficiary-api-service.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-beneficiary-registration',
  templateUrl: './beneficiary-registration.component.html',
  styleUrls: ['./beneficiary-registration.component.css']
})
export class BeneficiaryRegistrationComponent implements OnInit {
  formData: FormGroup;
  genderType = ['Male', 'Female'];

  constructor(private formBuilder: FormBuilder,private beneficiaryApi : BeneficiaryApiServiceService,private router: Router) {
    this.formData = formBuilder.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender:['', Validators.required],
      phoneNumber: ['', Validators.required],
      address:['', Validators.required],
      dependents:[''],
      story:[''],
      category:['', Validators.required],
      grantAmount:['', Validators.required],
      maximumGrant:['',Validators.required],
      registeredBy:['', Validators.required],
      verifiedBy:['', Validators.required],
      endorcements:['', Validators.required],
      
     });
   }
   onSubmit() {
    const ben: Beneficiary = this.formData.value;
    this.beneficiaryApi.register(ben).subscribe(data => {
     this.router.navigate([data]);      
    }); 
  }
  ngOnInit(): void {
  }

}
