import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private http: HttpClient
  ) { }

  public getNavBarList(): Observable<any> {
    return this.http.get('./assets/mockdata/navbar.json')
  }
}
