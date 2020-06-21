import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id: number;
  newsList1: any[];
  category: string;
  header: string;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
