import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: boolean;
  queryHeader: string;
  name: any = '';


  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.route.queryParams.subscribe(data => {
      this.queryHeader = data.header;
    });
  }

  ngOnInit(): void {
    this.userService.authState$.subscribe(authState => this.authState = authState);
  }

  selectCategory(value: string) {
    if (value === 'all'){
      console.log('all');
      this.router.navigate(['']).then();
    }else{
      this.router.navigate(['/index/category', value]).then();
    }
  }

  onSearch() {
    this.router.navigate(['/index/search', this.name]).then();
  }
}
