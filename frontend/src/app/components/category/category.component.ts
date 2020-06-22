import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  value: string;
  newsList: any;
  category: string;
  header: string;
  config: any;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
                this.config = {currentPage: 1,
                  itemsPerPage: 10,
                  totalItems:0
                };

                route.queryParams.subscribe(params => {
                  this.config.currentPage = params['page']?params['page']:1});
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.value;
        })
      )
      .subscribe(catId => {
        this.value = catId;
        this.newsService.getCategory(this.value).subscribe(news =>
          this.newsList = news);
        });

  }

  selectNews(id: any) {
    console.log('on clicked');
    this.router.navigate(["/index", id]).then();
  }

  pageChange(newPage: number){
    this.router.navigate(['/index/category/'+this.value], {queryParams: {page: newPage}});
  }
}
