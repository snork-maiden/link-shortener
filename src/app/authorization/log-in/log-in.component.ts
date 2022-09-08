import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  loginError: null | string = null;
  constructor(private authorization: AuthorizationService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const values = form.value;
    this.authorization.logIn(values.username, values.password);
    setTimeout(() => (this.loginError = 'Wrong login or password'), 1000);
  }
}
