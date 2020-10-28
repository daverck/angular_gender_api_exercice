import { Component, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mCarousel: M.Carousel;

  mCarouselOptions: Partial<M.CarouselOptions> = {fullWidth: true, duration: 100};

}
