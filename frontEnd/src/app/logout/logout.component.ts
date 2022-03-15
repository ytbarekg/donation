import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../auth-state.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authStateService: AuthStateService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authStateService.logout();
    this.router.navigate(['home']);
  }

}
