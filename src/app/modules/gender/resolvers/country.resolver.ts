import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ContriesJsonModel } from '../models/countries.models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable(
  // {providedIn: 'root'}
)
export class CountryResolver implements Resolve<ContriesJsonModel[]> {
  url: string = "https://restcountries.eu/rest/v2/all";

  constructor(
    private http: HttpClient
  ) { 

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ContriesJsonModel[] | Observable<ContriesJsonModel[]> | Promise<ContriesJsonModel[]> {
    console.log(42)
    return this.http.get<ContriesJsonModel[]>(this.url)//.pipe(delay(5000));
  }
}
