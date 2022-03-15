import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private authStateService: AuthStateService) { }

  ngOnInit(): void {
    this.user = this.authStateService.getUser();
  }

}
