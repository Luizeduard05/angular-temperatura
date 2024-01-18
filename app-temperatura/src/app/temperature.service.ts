import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  private lastSearchDataSubject = new BehaviorSubject<any>(null);
  lastSearchData$ = this.lastSearchDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTemperature(city: string, metric: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${environment.apiKey}&units=${metric}`;
    return this.http.get(url);
  }

  setLastSearchData(data: any) {
    this.lastSearchDataSubject.next(data);
  }
}

