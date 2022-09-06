import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isPasswordError = false;
  registrationError: string | null = null;
  constructor(private authorization: AuthorizationService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.isPasswordError = false;
    const values = form.value;
    if (values.password !== values['password-repeat']) {
      this.isPasswordError = true;
      return;
    }

    this.authorization.register(values.username, values.password).subscribe({
      next: () => this.authorization.logIn(values.username, values.password),
      error: (e) => (this.registrationError = e.error.detail),
    });
  }
}
