import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { GenderStatByCountryComponent } from './components/gender-stat-by-country/gender-stat-by-country.component';
import { CountryResolver } from './resolvers/country.resolver';


const routes: Routes = [
  { path: '', component: GenderStatByCountryComponent, children: [
    { path: 'select', component: CountrySelectComponent, resolve: {model: CountryResolver} }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
