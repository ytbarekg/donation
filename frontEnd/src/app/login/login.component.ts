import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthStateService } from '../auth-state.service';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formError : any ;
  formData: FormGroup;
  constructor(private authStateService: AuthStateService, private formBuilder: FormBuilder, private router: Router) {
    this.formData = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const {email, password} = this.formData.value;
    this.authStateService.login(email, password).subscribe(location => {
      this.router.navigate([location]);
    }, error=> {
      console.log(error);
      this.formError = error;
    }, () => {
      
    });
  }

  ngOnInit(): void {
    if(this.authStateService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    this.formError = null;
  }

}
