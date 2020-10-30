import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { MCarouselDirective } from './directives/m-carousel.directive';
import { CategoriesPipe } from './pipes/categories.pipe';
import { StatesPipe } from './pipes/states.pipe';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    MCollapsibleDirective,
    MCarouselDirective,
    CategoriesPipe,
    StatesPipe,
    BreadcrumbsComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
