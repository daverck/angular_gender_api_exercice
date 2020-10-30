import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ActivationStart, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';

export type BreadCrumb = { path: string, label: string};
export type BreadCrumbs = BreadCrumb[];


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  links: BreadCrumbs = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(_ => {
      this.links = this.buildLinks(this.activatedRoute.root);
    })
  }  

  buildLinks(route: ActivatedRoute, url: string = "", links: BreadCrumbs = []): BreadCrumbs {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadCrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const nextUrl = path ? `${url}/${path}`: url;

    const newBreadCrumbs = label ? [...links, {path, label}] : [...links];
    if(route.firstChild) {
      return this.buildLinks(route.firstChild, nextUrl, newBreadCrumbs);
    }
    
    return newBreadCrumbs;
  }
}
