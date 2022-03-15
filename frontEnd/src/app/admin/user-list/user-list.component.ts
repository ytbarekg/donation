import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[]
  displayedColumns: string[] = ['_id', 'firstName'];
  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.userApiService.getAll().subscribe(data => {
      this.users = data;
    })
  }

}
