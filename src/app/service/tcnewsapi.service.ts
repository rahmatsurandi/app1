import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TcnewsapiService {
  constructor(private _http: HttpClient) {}
  // top headline  Api url
  TopHeadlinesNews =
    'https://newsapi.org/v2/top-headlines?country=id&apiKey=e0b446f548ab464aaf1b833993e30070';
  // techno Api url
  TechnoNews =
    'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=e0b446f548ab464aaf1b833993e30070';
  // bussines api url
  BuzzNews =
    'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=e0b446f548ab464aaf1b833993e30070';

  // business

  tcBuzzNews(): Observable<any> {
    return this._http.get(this.BuzzNews);
  }
  // tecnonolgy

  tcTechnoNews(): Observable<any> {
    return this._http.get(this.TechnoNews);
  }
  // top headline

  tcHeadlines(): Observable<any> {
    return this._http.get(this.TopHeadlinesNews);
  }

  // entertainment
}
