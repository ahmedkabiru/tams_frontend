import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';
import { FormBuilder, Validators, FormGroup,NgForm} from '@angular/forms';
import { routerTransition } from '../router.animations';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
//   rForm: FormGroup;  
//   usernameAlert:string="Please fill username";
//   passwordAlert:string="Please fill password";
//   loginAlert:string;
  loginMessage: string = '';
  canLogin: boolean = true;
  constructor(private router:Router ,private authService:AuthService) {
    // this.rForm = fb.group({
    //   'username' : [null, Validators.required],
    //   'password' : [null, Validators.required]
    // });
  }

    ngOnInit() {}

    onLoggedin(form: NgForm) {
        //localStorage.setItem('isLoggedin', 'true');
    this.canLogin = false;
    this.loginMessage = "";
    this.authService.loginUser(form.value.username, form.value.password)
      .subscribe(
        response => {
          console.log(response);
          if (response == undefined || response == null || response.accessToken == null) {
            this.loginMessage = "Empty response or token not found.";
            this.canLogin = true;
          } else {
            this.loginMessage = "Login successful!";
            this.canLogin = false;
            this.router.navigate(["/"]);
          }
        },
        error => {
          //console.log(error);
          this.canLogin = true;
          switch (error.status) {
            case 500:
            this.loginMessage = "wrong username or password";
            break;
            case 403:
              this.loginMessage = error.statusText;
              break;
            case 504:
              this.loginMessage = "Some problem with connecting to the server. Status: " + error.statusText;
              break;
          }
        }
      );
    }
}
