import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: boolean;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.authState$.subscribe(authState => this.authState = authState);
  }

  selectCategory(value: string) {
    console.log('category clicked');
    if(value == 'all'){
      console.log("all");
      this.router.navigate([""]).then();
    }else{
      this.router.navigate(["/index/category", value]).then();
    }
  }

}
