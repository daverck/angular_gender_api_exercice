import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderRoutingModule } from './gender-routing.module';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { GenderStatByCountryComponent } from './components/gender-stat-by-country/gender-stat-by-country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryResolver } from './resolvers/country.resolver';



@NgModule({
  declarations: [CountrySelectComponent, GenderStatByCountryComponent],
  imports: [
    CommonModule,
    GenderRoutingModule,
    FormsModule, // pour [(ngModel)]
    HttpClientModule
  ],
  providers: [ CountryResolver ]
})
export class GenderModule { }
