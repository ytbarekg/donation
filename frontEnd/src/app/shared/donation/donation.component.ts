import { Component, OnInit } from '@angular/core';
import { DonationApiService } from '../donation-api.service';
import { Donation } from './donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donations!: Donation[]
  displayedColumns: string[] = ['_id', 'amount', 'payment', 'transactionNumber', 'status'];
  constructor(private donationApiService: DonationApiService) { }

  ngOnInit(): void {
    this.donationApiService.getAll().subscribe(data => {
      console.log(data);
      this.donations = data;
    })
  }

}
