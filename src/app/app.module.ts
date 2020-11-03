import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { MCarouselDirective } from './directives/m-carousel.directive';
import { CategoriesPipe } from './pipes/categories.pipe';
import { StatesPipe } from './pipes/states.pipe';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { DemoModule } from './modules/demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,
    MCollapsibleDirective,
    MCarouselDirective,
    CategoriesPipe,
    StatesPipe,
    BreadcrumbsComponent,
    MenuComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
