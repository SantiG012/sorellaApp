import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formData = new FormGroup({
    emailField: new FormControl(""),
    usernameField: new FormControl(""),
    passwordField: new FormControl(""),
    repaswwordField: new FormControl(""),
    phoneField: new FormControl("")
  })

  postUser(){
    const user = {
      email: this.formData.controls.emailField.value,
      name: this.formData.controls.usernameField.value,
      password: this.formData.controls.passwordField.value,
      phone: this.formData.controls.phoneField.value
    }

    this.userService.postUser(user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    //TODO need to connect to restSorella and try to post a new user 
    // if success, redirect to the landing page
  }
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

}
