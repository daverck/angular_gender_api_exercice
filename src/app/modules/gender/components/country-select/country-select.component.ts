import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesJsonModel } from '../../models/countries.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit, AfterViewInit {

  @ViewChild("selectC")
  select: ElementRef;
  selectedCode: string;
  @Output()
  selectValueEvent =  new EventEmitter<string>();
  model: CountriesJsonModel[];
  // url: string = "https://restcountries.eu/rest/v2/all";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { 
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("change !");
  //   if(changes["selectValue"])
  //   {
  //     // this.selectValue = this.select.nativeElement.value;
  //     console.log("change !!");
  //     console.log(this.select.nativeElement.value);
  //     this.selectValueEvent.emit(this.select.nativeElement.value);
  //   }
  // }

  onOptionsSelected(value: string): void {
    // console.log(value);
    this.selectValueEvent.emit(value);
  }

  ngOnInit(): void {
    // this.http.get<CountriesJsonModel[]>(this.url).subscribe(
    //   data => {
    //     this.model = data as CountriesJsonModel[];
        
    //     setTimeout(
    //       () => {
    //         M.FormSelect.init(this.select.nativeElement, {});
    //       },
    //       100
    //     );
        
    //   },
    //   error => {},
    //   () => {}
    // );

    this.model = this.route.snapshot.data.countryModel;    
    
    // this.route.data.subscribe(
    //   // data => { this.model = data.model}
    //   data => {
    //     console.log(data);
    //     this.model = data as CountriesJsonModel[];
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {}

    //   );
    
  }

  ngAfterViewInit(){
    M.FormSelect.init(this.select.nativeElement);
    this.selectValueEvent.emit(this.select.nativeElement.value);
  }  



}
