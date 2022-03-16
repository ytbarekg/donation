import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent, children: [
    {path: 'users', component: UserListComponent},
    {path: 'donations'},
    {path: 'grants'},
    {path: 'endorsements'},
    {path: '', redirectTo: 'users', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
