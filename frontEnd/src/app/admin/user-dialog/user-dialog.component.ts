import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(private userApiService:UserApiService, @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<UserDialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(true);
  }

  delete() {
    if(confirm("Delete the user?")) {
      this.userApiService.deleteById(this.data._id).subscribe(data => {
        this.close();
      });
    }
  }

}
