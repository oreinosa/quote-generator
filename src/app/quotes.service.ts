import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { Quote } from './quote';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiURI = environment.wordsAPI;
  constructor(
    private http: HttpClient
  ) { }

  getRandom(): Observable<Quote> {
    return this.http.get<any>(`${this.apiURI}/random`).pipe(catchError(e => of(e.error)));
  }

  getWordByKeywords(keywords: string): Observable<Quote> {
    return this.http.get<any>(`${this.apiURI}/keywords/${keywords}`).pipe(catchError(e => of(e.error)));
  }

  getWordByAuthor(author: string): Observable<Quote> {
    return this.http.get<any>(`${this.apiURI}/author/${author}`).pipe(catchError(e => of(e.error)));
  }
}
