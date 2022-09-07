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
  squeeze(link: string) {
    this.http
      .post<any[]>(this.baseUrl + 'squeeze' + `?link=${link}`, '', {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authorizationService.getToken()}`
        ),
      })
      .pipe(tap((data) => console.log(data)))
      .subscribe();
  }

  getStatistics(
    offset: number,
    limit: number
  ): Observable<StatisticResponse[]> {
    //order from enum, offset from page number
    return this.http
      .get<StatisticResponse[]>(
        this.baseUrl +
          'statistics' +
          `` +
          `?offset=${offset}` +
          `&limit=${limit}`,
        {
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${this.authorizationService.getToken()}`
          ),
        }
      )
      .pipe(tap((data) => console.log(data)));
  }
}
