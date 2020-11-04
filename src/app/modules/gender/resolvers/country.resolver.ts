import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CountriesJsonModel } from '../models/countries.models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable(
   {providedIn: 'root'}
)
export class CountryResolver implements Resolve<CountriesJsonModel[]> {
  url: string = "https://restcountries.eu/rest/v2/all";

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CountriesJsonModel[] | Observable<CountriesJsonModel[]> | Promise<CountriesJsonModel[]> {

    // let p = this.http.get<CountriesJsonModel[]>(this.url).toPromise();
    // return Promise.resolve(p);

    return this.http.get<CountriesJsonModel[]>(this.url);//.pipe(delay(5000));
  }
}
