import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../auth-state.service';
import { User } from '../user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formError: any;
  formData: FormGroup;
  countries = ['US', 'ET', 'TIG']
  constructor(private authStateService:AuthStateService, private userApiService: UserApiService, private formBuilder: FormBuilder, private router: Router) {
    this.formData = formBuilder.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const user: User = this.formData.value;
    this.userApiService.signup(user).subscribe(data => {
      
    }, error=> {
      console.log(error);
      this.formError = error.error;
    }, () => {
      
    });
  }

  ngOnInit(): void {
    this.formError = null;
    if(this.authStateService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    
  }

}
