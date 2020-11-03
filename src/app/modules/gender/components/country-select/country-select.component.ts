import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContriesJsonModel } from '../../models/countries.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit, AfterViewInit {

  @ViewChild("selectC")
  select: ElementRef;
  @Output()
  selectValueEvent =  new EventEmitter<string>();
  model: ContriesJsonModel[];
  url: string = "https://restcountries.eu/rest/v2/all";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { 
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes["selectValue"])
  //   {
  //     // this.selectValue = this.select.nativeElement.value;
  //     console.log(this.select.nativeElement.value);
  //     this.selectValueEvent.emit(this.select.nativeElement.value);
  //   }
  // }

  ngOnInit(): void {
    // this.http.get<ContriesJsonModel[]>(this.url).subscribe(
    //   data => {
    //     this.model = data as ContriesJsonModel[];
        
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
    
    this.route.data.subscribe(data => { this.model = data.model});
    
  }

  ngAfterViewInit(){
    M.FormSelect.init(this.select.nativeElement);
  }  



}
