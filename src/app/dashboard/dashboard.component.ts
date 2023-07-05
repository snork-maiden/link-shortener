import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  formSubmit = new EventEmitter<null>();
  onSubmit() {
    this.formSubmit.emit();
  }
}
