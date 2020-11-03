import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { genderizeJsonModel } from '../../models/genderize.model';

@Component({
  selector: 'app-gender-stat-by-country',
  templateUrl: './gender-stat-by-country.component.html',
  styleUrls: ['./gender-stat-by-country.component.scss']
})
export class GenderStatByCountryComponent implements OnInit {

  url: string = "https://api.genderize.io";
  @ViewChild("firstname")
  firstnameInput: ElementRef;
  country_id: string = "us";
  // country_id: string;
  model: genderizeJsonModel;
  @ViewChild("progressBar")
  progressBar: ElementRef;

  constructor(private http : HttpClient) { 
    
  }

  ngOnInit(): void {
  }

  search(): void {
    let params = new HttpParams();
    params = params.append("name", this.firstnameInput.nativeElement.value);
    params = params.append("country_id", this.country_id);

    // console.log(this.country_id);
    
    
    this.http.get(this.url, {params}).subscribe(
      data => {
        // console.log(data);
        this.model = data as genderizeJsonModel;
        this.progressBar.nativeElement.style.width = this.model.probability*100+"%";
      },
      error => {},
      () => {}
    );

  }
}
