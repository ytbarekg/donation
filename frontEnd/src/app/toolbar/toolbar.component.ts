import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authStateService: AuthStateService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authStateService.isLoggedIn();
  }

}
