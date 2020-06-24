import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  name = 'Dilan Fernando';

  showHead: boolean = false;

  ngOnInit() {}

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if(event['url'] == '/login') {
          this.showHead = false;
        }else {
          this.showHead = true;
        }
      }
    });
  }

}
