import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { StatisticResponse } from '../interfaces';
import { LinkSqueezeService } from '../link-squeeze.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pageNumber = 0;
  limit = 15;
  links: StatisticResponse[] = [];
  constructor(private linkSqueezeService: LinkSqueezeService) {}

  ngOnInit(): void {
    this.showStatistics();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.linkSqueezeService.squeeze(form.value.url);
  }

  showStatistics() {
    this.linkSqueezeService.getStatistics().subscribe({
      next: (data) => (this.links = data),
    });
  }
}
