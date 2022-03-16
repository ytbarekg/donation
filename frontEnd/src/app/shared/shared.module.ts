import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation/donation.component';
import { EndorsementComponent } from './endorsement/endorsement.component';
import { GrantComponent } from './grant/grant.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DonationComponent,
    EndorsementComponent,
    GrantComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
