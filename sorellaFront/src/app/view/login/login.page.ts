import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../application/services/user-service.service';
import { AuthService } from '../../application/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData = new FormGroup({
    emailField: new FormControl(""),
    passwordField: new FormControl("")
  })

  reaccion(){
    const user = {
      email: this.formData.controls.emailField.value,
      password: this.formData.controls.passwordField.value
    }

    this.authService.authenticateUser(user).subscribe((data: any) => {
      this.router.navigate(['/tabs/tab2'])
    })

  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
