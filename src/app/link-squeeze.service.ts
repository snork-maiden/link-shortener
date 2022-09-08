import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { StatisticResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class LinkSqueezeService {
  baseUrl = 'http://79.143.31.216/';

  constructor(
    private http: HttpClient,
    private authorizationService: AuthorizationService
  ) {}

  squeeze(link: string): Observable<StatisticResponse> {
    return this.http.post<StatisticResponse>(
      this.baseUrl + 'squeeze' + `?link=${link}`,
      '',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authorizationService.getToken()}`
        ),
      }
    );
  }

  getStatistics(
    offset: number,
    limit: number,
    sortParameters: string[]
  ): Observable<StatisticResponse[]> {
    let sortString: string = '';
    sortParameters.forEach((item) => (sortString += `order=${item}&`));
    sortString = sortString.slice(0, -1);
    return this.http.get<StatisticResponse[]>(
      this.baseUrl +
        'statistics' +
        '?' +
        sortString +
        `&offset=${offset}` +
        `&limit=${limit}`,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authorizationService.getToken()}`
        ),
      }
    );
  }
}
