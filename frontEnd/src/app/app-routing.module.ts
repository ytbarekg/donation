import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { BeneficiaryRegistrationComponent } from './beneficiary-registration/beneficiary-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakerDashboardComponent } from './maker-dashboard/maker-dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'beneficiary', component: BeneficiaryRegistrationComponent},
  {path: 'admin', data:{role: 'Admin'}, canActivate: [AuthGuardService], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'donor', data:{role: 'Donor'}, canActivate: [AuthGuardService], loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)},
  {path: 'maker', component: MakerDashboardComponent, data:{role: 'Maker'}, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
