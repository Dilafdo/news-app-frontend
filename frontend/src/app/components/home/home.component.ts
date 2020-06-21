import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: any[] = [];
  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    this.newsService.getAllItems().subscribe((news: {newsList: any[]}) => {
      this.newsList = news.newsList;
    });
  }

  selectNews(id: number){
    console.log('on clicked');
    this.router.navigate(["/index", id]).then();
  }

  selectCategory(value: string) {
      console.log('category clicked');
      this.router.navigate(["/index/category/domestic"]).then();
  }
}
