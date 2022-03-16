import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from '../shared/donation/donation.component';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';

const routes: Routes = [
  {path: '', component: DonorDashboardComponent, children: [
    {path: '', component: CreateDonationComponent},
    {path: 'donations', component: DonationComponent},
    {path: 'endorsements'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
