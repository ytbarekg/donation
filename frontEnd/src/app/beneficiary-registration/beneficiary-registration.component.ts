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
  endorcements! : {content: string};
  

  constructor(private formBuilder: FormBuilder,private authStateService:AuthStateService,private beneficiaryApi : BeneficiaryApiServiceService,private router: Router) {
    this.formData = formBuilder.group({
      firstName: ['', Validators.required], 
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender:['', Validators.required],
      phoneNumber: ['', { validators: [Validators.required, Validators.pattern("[- +()0-9]{6,}")], updateOn: "blur" }],
      address:['', Validators.required],
      dependents:['', [Validators.min(0), Validators.max(10)]],
      category:['', Validators.required],
      maximumGrant:['',{ validators: [Validators.required, Validators.min(50)]}],
     });
   }
   ngOnInit(): void {        
  }
   
  onSubmit() {
    const ben = {
      firstName: this.formData.value.firstName,
      middleName: this.formData.value.middleName,
      lastName:this.formData.value.lastName,
      age: this.formData.value.age,
      gender:this.formData.value.gender,
      phoneNumber:this.formData.value.phoneNumber,
      address: this.formData.value.address,
      dependents: this.formData.value.dependents,
      category: this.formData.value.category,
      maximumGrant:this.formData.value.maximumGrant,
    };
    this.beneficiaryApi.register(ben).subscribe(data=>{
      if(data){
        this.router.navigateByUrl('/home')
      }else{
        alert("somthing went wrong!");}
    })
  }

}
