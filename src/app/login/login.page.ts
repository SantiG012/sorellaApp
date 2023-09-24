import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    console.log(`${this.formData.controls.emailField.value}`)
    console.log(`${this.formData.controls.passwordField.value}`)
    //TODO
    // Implement httpClient request to restSorella trying to authenticate with given credentials 
  }

  constructor() { }

  ngOnInit() {
  }

}
