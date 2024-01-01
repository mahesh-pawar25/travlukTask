import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDetailsService {
  public menu: any;
  public menuDetails = new BehaviorSubject({});
  public MenuDetails = this.menuDetails.asObservable();

  constructor() { }

  public setMenuDetails(menuDetails: any): void {
    this.menuDetails.next(menuDetails);
  }

  public getMenuDetails(): Observable<any> {
    return this.MenuDetails;
  }
}
