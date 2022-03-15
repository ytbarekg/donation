import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakerDashboardComponent } from './maker-dashboard/maker-dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminDashboardComponent, data:{role: 'Admin'}}, //, canActivate: [AuthGuardService]},
  {path: 'donor', component: DonorDashboardComponent, data:{role: 'Donor'}, canActivate: [AuthGuardService]},
  {path: 'maker', component: MakerDashboardComponent, data:{role: 'Maker'}, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
