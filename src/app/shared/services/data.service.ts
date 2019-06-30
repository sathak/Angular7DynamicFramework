import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  getauth(url: string) {
    return this.http.get(url).toPromise()
      .then((data: any) => {
        localStorage.setItem('userInfo', JSON.stringify(data));
      });
  }

  get(url: string) {
    return this.http.get(url)//httpOptions
      .pipe(
        catchError(this.handleError)
      );
  }
  post(url: string, data: any) {
    return this.http.post(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  put(url: string, data: any) {
    return this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  delete(url: string) {
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
