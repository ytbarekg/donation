import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryApiServiceService } from '../beneficiary-api-service.service';
import {MatCardModule} from '@angular/material/card';
import { AuthStateService } from '../auth-state.service';


@Component({
  selector: 'app-beneficiary-registration',
  templateUrl: './beneficiary-registration.component.html',
  styleUrls: ['./beneficiary-registration.component.css']
})
export class BeneficiaryRegistrationComponent implements OnInit {
  formError: any;
  formData: FormGroup;
  genderType = ['Male', 'Female'];
  categories =['Elderly','Medical seeker', 'Orphan', 'Disabled']

  constructor(private formBuilder: FormBuilder,private authStateService:AuthStateService,private beneficiaryApi : BeneficiaryApiServiceService,private router: Router) {
    this.formData = formBuilder.group({
      firstName: ['', Validators.required], 
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender:['', Validators.required],
      phoneNumber: ['', { validators: [Validators.required, Validators.pattern("[- +()0-9]{6,}")], updateOn: "blur" }],
      address:['', Validators.required],
      dependents:[''],
      category:['', Validators.required],
      grantAmount:['', Validators.required],
      maximumGrant:['',Validators.required],
      registeredBy:['', Validators.required],
      verifiedBy:['', Validators.required],
      endorcements:['', Validators.required]      
     });
   }
   
  onSubmit() {
    const ben: Beneficiary = this.formData.value;
    this.beneficiaryApi.register(ben) .subscribe(data => {
    });
  }

  ngOnInit(): void {
    
    
  }

}
