import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: any[] = [];
  config: any;

  constructor(private newsService: NewsService,
              private router: Router,
              private route: ActivatedRoute) {
                  this.config = {currentPage: 1,
                                  itemsPerPage: 10,
                                  totalItems: 0
                  };

                  route.queryParams.subscribe(params => {
                    this.config.currentPage = params.page ? params.page : 1; });
  }

  ngOnInit(): void {
    this.newsService.getAllItems().subscribe((news: {newsList: any[]}) => {
      this.newsList = news.newsList;
    });

  }

  selectNews(id: number){
    this.router.navigate(['/index', id]).then();
  }

  pageChange(newPage: number){
    this.router.navigate([''], {queryParams: {page: newPage}});
  }
}
