import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ActivationStart, Router } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements AfterContentChecked {
  links: Array<{path: string, label: string}> = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterContentChecked(): void {
    this.router.events.subscribe(e => {
      this.links = [];
      this.initBreadcrumb(this.route);
    })
  }

  initBreadcrumb(route: ActivatedRoute) {
    console.log(route.children);
    const children = route.children;

    for(const child of children) {
      const snapshot = child.snapshot;

      this.links.push({path: snapshot.url[0].path, label: snapshot.data["breadCrumb"]});
    }
  }

}
