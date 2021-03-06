import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  newsList: any[] = [];
  category: string;
  header: string;
  config: any;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.config = {currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    };

    route.queryParams.subscribe(params => {
      this.config.currentPage = params.page ? params.page : 1; });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.query;
        })
      )
      .subscribe(queryValue => {
        this.query = queryValue;
        this.newsService.getQuery(this.query).subscribe((news: {newsList: any[]}) =>
          this.newsList = news.newsList);
        console.log(this.newsList);
      });

  }

  selectNews(id: any) {
    this.router.navigate(['/index', id]).then();
  }

  pageChange(newPage: number){
    this.router.navigate(['/index/category/' + this.query], {queryParams: {page: newPage}});
  }

}
