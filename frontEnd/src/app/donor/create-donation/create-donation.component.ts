import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/auth-state.service';
import { DonationApiService } from 'src/app/shared/donation-api.service';
import { Donation } from 'src/app/shared/donation/donation';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css']
})
export class CreateDonationComponent implements OnInit {

  formError: any;
  formData: FormGroup;
  beneficiaries!: {id: string, name: string}[];
  methods = ['Credit', 'Debit', 'BankTransfer', 'Cash']
  constructor(private authStateService:AuthStateService, private userApiService:UserApiService, private donationApiService: DonationApiService, private formBuilder: FormBuilder, private router: Router) {
    this.formData = formBuilder.group({
      amount: ['', Validators.required], 
      beneficiaries: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userApiService.getAll().subscribe(data => {
      this.beneficiaries = data.map(u => ({id: u._id, name: u.firstName + " " + u.lastName}));
      console.log(this.beneficiaries);
    })
  }

  onSubmit() {
    const donation: Donation = {...this.formData.value, payment: {method: this.formData.value.payment}};
    console.log(donation);
    donation.donor = this.authStateService.getUser()!.id;
    this.donationApiService.create(donation).subscribe(data => {
      this.router.navigate(['/donor/donations']);
    }, error=> {
      console.log(error);
      this.formError = error.error;
    }, () => {
      
    });
  }

}
