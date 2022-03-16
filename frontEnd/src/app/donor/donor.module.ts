import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorRoutingModule } from './donor-routing.module';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DonorDashboardComponent,
    CreateDonationComponent
  ],
  imports: [
    CommonModule,
    DonorRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DonorModule { }
