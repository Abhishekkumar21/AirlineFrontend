import { Injectable } from '@angular/core';

import { Iadminlogin } from './iadminlogin';
import { HttpClient } from '@angular/common/http'; // this will you not got directly it cotains get put delete put methods
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminloginService {
  url = 'http://localhost:38579/api/Admin'; //Api Url
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(private httpclient: HttpClient) {}
  login(adminlogindata: Iadminlogin): Observable<any> {
    return this.httpclient
      .post(`${this.url}/Adminlogin`, adminlogindata, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError)); //have to change the response type in text formate because from api it is coming in json.
  }

  handleError(error: HttpErrorResponse) {
    let errormessage = '';
    errormessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
