import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { environment } from './environment';
import { StatisticResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class LinkSqueezeService {

  constructor(
    private http: HttpClient,
    private authorizationService: AuthorizationService
  ) {}

  squeeze(link: string): Observable<StatisticResponse> {
    const body = {
      link
    };
    return this.http.post<StatisticResponse>(
      environment.APIDomain + 'squeeze',
      JSON.stringify(body),
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authorizationService.getToken()}`
        ).set('Content-Type', 'application/json'),
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
      environment.APIDomain +
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
