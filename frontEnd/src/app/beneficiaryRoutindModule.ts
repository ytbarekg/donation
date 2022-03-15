import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import { BeneficiaryRegistrationComponent } from "./beneficiary-registration/beneficiary-registration.component";
import { GrantDashboardComponent } from "./grant-dashboard/grant-dashboard.component";


const routes : Routes = [
    {path:'beneficiary', component:BeneficiaryRegistrationComponent },
    {path: 'grant', component:GrantDashboardComponent}
];

@NgModule({ imports:[BrowserModule,RouterModule.forRoot(routes)]})
export class BeneficiaryRoutindModule{}