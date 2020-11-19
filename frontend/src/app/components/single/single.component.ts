import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  id: number;
  news;
  header: string;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.id;
        })
      )
      .subscribe(newsId => {
        this.id = newsId;
        this.newsService.getSingleNews(this.id).subscribe(news => {
          this.news = news;
        });
      });

  }
}
