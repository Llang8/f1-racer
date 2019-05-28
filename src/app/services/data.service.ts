import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  racerUrl: string = 'https://ergast.com/api/f1/2019/5/driverStandings.json';

  getRacers() {
    return this.http.get(this.racerUrl);
  }
}
