import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MeteoModel } from '../../models/meto.model';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  apiKey: string = "d52e50e34214ff0b92247f788638eeb9";
  url: string = "http://api.openweathermap.org/data/2.5/weather";
  city: string = "nivelles";
  model: MeteoModel;
  picture: string = "http://openweathermap.org/img/wn/10d@2x.png";

  constructor(
    // injection de dépendance : tjs dans le constructeur
    // sous la forme
    // private nomDeLaVariable : TypeDuService 
    private http : HttpClient
  ) {


   }

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.append("appid", this.apiKey);
    params = params.append("q", this.city);
    params = params.append("units", "metric");

    this.http.get(this.url, {params}).subscribe( // la fonction get retourne un observable qui sera éxécuté après obtention des données de l'api
      // ! à l'ordre des méthodes défini les méthodes de succès, échec ... (et non le nom des méthodes)
      data => { // en cas de succès
        console.log(data);
        this.model = data  as MeteoModel;
      },
      error => { // en cas d'erreur

      },
      () => { // dans tous les cas

      }
    ); 
  }


}
