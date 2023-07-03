import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  username:  string = '';
  password:  string = '';
  passwordRepeat: string = '';
  isFormValid = false;
  isPasswordError = false;
  registrationError: string | null = null;
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
     case 'password-repeat':
       this.passwordRepeat = fieldValue;
       break;
    }

     this.isFormValid = this.password !== '' && this.username !== ''&& this.passwordRepeat !== '';
 }

  onSubmit(form: NgForm) {
    this.isPasswordError = false;
    if (this.password !== this.passwordRepeat) {
      this.isPasswordError = true;
      return;
    }

    this.authorization.register(this.username, this.password).subscribe({
      next: () => this.authorization.logIn(this.username, this.password),
      error: (e) => (this.registrationError = e.error),
    });
  }
}
