import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(private authorization: AuthorizationService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const values = form.value;
    this.authorization.logIn(values.username, values.password);
  }
}
