import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${environment.apiBaseUrl}/${endpoint}`).pipe(catchError(this.handleError));
  }

  post<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${environment.apiBaseUrl}/${endpoint}`, body).pipe(catchError(this.handleError));
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${environment.apiBaseUrl}/${endpoint}`).pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.put<T>(`${environment.apiBaseUrl}/${endpoint}`, body).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}: ${error.statusText}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
