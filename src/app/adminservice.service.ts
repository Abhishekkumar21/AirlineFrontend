import { Injectable } from '@angular/core';
import { Iflight } from './iflight';
import { HttpClient } from '@angular/common/http'; // this will you not got directly it cotains get put delete put methods
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  url = 'http://localhost:38579/api/FlightDetail'; //api url from the visual studio
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(private httpclient: HttpClient) {}

  getflightlist(): Observable<Iflight[]> {
    return this.httpclient
      .get<Iflight[]>(this.url + '/flightlist')
      .pipe(catchError(this.handleError));
  }

  addFlight(flight: Iflight): Observable<Iflight> {
    return this.httpclient
      .post<Iflight>(`${this.url}/AddFlight`, flight)
      .pipe(catchError(this.handleError));
  }

  deleteflight(fId: number): Observable<Iflight> {
    return this.httpclient
      .delete<Iflight>(`${this.url}/DeleteFlight/${fId}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errormessage = '';
    errormessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
