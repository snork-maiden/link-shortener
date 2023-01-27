import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../environment';
import { SortInfo, StatisticResponse } from '../interfaces';
import { LinkSqueezeService } from '../link-squeeze.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pageNumber = 0;
  limit = 10;
  shortLink: string = '';
  links: StatisticResponse[] = [];
  sortInfo: SortInfo = {
    short: null,
    target: null,
    counter: null,
  };
  sortOrder = ['short', 'target', 'counter'];
  shortURL = environment.APIDomainShort

  constructor(private linkSqueezeService: LinkSqueezeService) {}

  ngOnInit(): void {
    this.showStatistics();
  }

  onSubmit(form: NgForm) {
    this.linkSqueezeService.squeeze(form.value.url).subscribe({
      next: (data) => {
        this.shortLink = data.short;
      },
    });
    form.reset();
    this.showStatistics();
  }

  copyLinkToClipboard(linkCode: string) {
    navigator.clipboard.writeText(environment.APIDomain + '/s/' + linkCode);
  }

  showStatistics() {
    const offset = this.pageNumber * this.limit;

    let sortParameters: string[] = [];
    for (let item of this.sortOrder) {
      if (this.sortInfo[item]) {
        sortParameters.push(this.sortInfo[item] + '_' + item);
      }
    }
    this.linkSqueezeService
      .getStatistics(offset, this.limit, sortParameters)
      .subscribe({
        next: (data) => (this.links = data),
      });
  }

  turnThePage(step: number) {
    this.pageNumber += step;
    this.showStatistics();
  }

  sortClick(columnName: 'short' | 'target' | 'counter') {
    this.sortOrder.sort((a) => (a === columnName ? 1 : 0));
    switch (this.sortInfo[columnName]) {
      case null:
        this.sortInfo[columnName] = 'asc';
        break;
      case 'asc':
        this.sortInfo[columnName] = 'desc';
        break;
      case 'desc':
        this.sortInfo[columnName] = null;
        break;
    }

    this.showStatistics();
    return;
  }
}
