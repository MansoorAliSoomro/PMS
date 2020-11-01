import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]{5,}')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  get username(): AbstractControl{
    return this.loginForm.get('username');
  }

  get password(): AbstractControl{
    return this.loginForm.get('password');
  }
  // login form submit
  submit(): void{
    this.router.navigate(['/app/home']);
    return;
  }


}
