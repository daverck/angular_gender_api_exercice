import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'TechnobelFEAngular2';

  mCollapsible: M.Collapsible;

  
  ngAfterViewInit(): void {
    this.mCollapsible.open(0);
  }

  openOnglet(id: number) {
    this.mCollapsible.open(id - 1);
  }
}
