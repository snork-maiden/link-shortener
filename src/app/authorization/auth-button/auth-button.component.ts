import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
