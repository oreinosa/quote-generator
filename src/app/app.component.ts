import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile$: Observable<boolean>;
  navLinks = [
    { label: "Random", path: "random" },
    { label: "By author", path: "author" },
    { label: "By keywords", path: "keywords" }
  ]


  constructor(breakpointObserver: BreakpointObserver) {
    this.isMobile$ = breakpointObserver.observe([
      Breakpoints.XSmall
    ]).pipe(
      map(result => result.matches)
    );
  }


}
