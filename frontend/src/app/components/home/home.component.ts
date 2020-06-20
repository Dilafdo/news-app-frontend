import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: any[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllItems().subscribe((news: {newsList: any[]}) => {
      this.newsList = news.newsList;
      // console.log(this.newsList);
    });
  }

}
