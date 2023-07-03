import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  loginError: null | string = null;
  username:  string = '';
  password:  string = '';
  isFormValid = false;
  constructor(private authorization: AuthorizationService) {}

  ngOnInit(): void {}

  saveFormField(fieldValue: string, fieldName: string) {
     switch (fieldName) {
      case 'username':
        this.username = fieldValue;
        break;
      case 'password':
        this.password = fieldValue;
        break;
     }

      this.isFormValid = this.password !== '' && this.username !== '';
  }

  onSubmit(form: NgForm) {
    this.authorization.logIn(this.username, this.password);
    setTimeout(() => (this.loginError = 'Wrong login or password'), 1000);
  }
}
