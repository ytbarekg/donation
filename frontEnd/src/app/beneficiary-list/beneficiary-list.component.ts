import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryApiServiceService } from '../beneficiary-api-service.service';

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.css']
})
export class BeneficiaryListComponent implements OnInit {

  bens!: Beneficiary[]
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'age', 'category'];
  constructor(private benApiService: BeneficiaryApiServiceService) { }

  ngOnInit(): void {
    this.benApiService.getAll().subscribe(data => {
      console.log(data)
      this.bens = data;
    })
  }

}
