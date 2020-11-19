import { Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  name = 'Dilan Fernando';

  showHead = false;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {}

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showHead = event.url !== '/login';
      }
    });
  }

}
