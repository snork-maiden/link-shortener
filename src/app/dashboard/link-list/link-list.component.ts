import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/environment';
import { SortInfo, StatisticResponse } from 'src/app/interfaces';
import { LinkSqueezeService } from 'src/app/link-squeeze.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
})
export class LinkListComponent implements OnInit {
  @Input() formSubmit = new EventEmitter<null>(); 
  shortURL = environment.APIDomainShort;
  shortLink: string = '';
  pageNumber = 0;
  limit = 10;
  links: StatisticResponse[] = [];
  sortInfo: SortInfo = {
    short: null,
    target: null,
    counter: null,
  };
  sortOrder = ['short', 'target', 'counter'];
  private subscription: Subscription = new Subscription(); 

  constructor(private linkSqueezeService: LinkSqueezeService) {}

  ngOnInit(): void {
    this.showStatistics();
    this.subscription = this.formSubmit.subscribe(() => { 
      this.showStatistics(); 
  });
  }

  ngOnDestroy(): void { 
    this.subscription.unsubscribe(); 
} 


  copyLinkToClipboard(linkCode: string) {
    navigator.clipboard.writeText(environment.APIDomain + '/s/' + linkCode);
  }

  showStatistics() {
    const offset = this.pageNumber * this.limit;

    let sortParameters: string[] = [];
    for (let item of this.sortOrder) {
      if (this.sortInfo[item]) {
        sortParameters.push(item + '_' + this.sortInfo[item]);
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
