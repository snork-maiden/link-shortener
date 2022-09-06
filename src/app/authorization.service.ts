import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  baseUrl = 'http://79.143.31.216/';
  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string): Observable<any[]> {
    return this.http
      .post<any[]>(
        this.baseUrl +
          'register' +
          `?username=${username}&password=${password}`,
        ''
      )
      .pipe(tap((data) => console.log(data)));
  }

  logIn(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    this.http
      .post<any[]>(this.baseUrl + 'login', body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      })
      .pipe(tap((data) => console.log(data)))
      .subscribe({
        next: () => this.router.navigate(['/', 'dashboard']),
        error: (e) => console.error(e),
      });
  }
}
