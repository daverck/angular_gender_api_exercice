import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { MCarouselDirective } from './directives/m-carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    MCollapsibleDirective,
    MCarouselDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
