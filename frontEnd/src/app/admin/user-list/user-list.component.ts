import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/user';
import { UserApiService } from 'src/app/user-api.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[]
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'email', 'role'];
  constructor(private userApiService: UserApiService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.userApiService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  openDialog(row:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    const dialogRef = this.matDialog.open(UserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.users = this.users.filter(u => u._id != row._id);
      }
    })
  }
}
