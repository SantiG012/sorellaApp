import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../application/services/user-service.service';
import { AuthService } from '../../application/services/auth.service';

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

    //TODO
    // Implement httpClient request to restSorella trying to authenticate with given credentials 

    this.authService.authenticateUser(user).subscribe((data: any) => {
      console.log(data);
    })

  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
