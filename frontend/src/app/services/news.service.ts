import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ProductModelServer} from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  // This is to fetch all news items from the backend server
  getAllItems(){
    return this.http.get(this.SERVER_URL + '/index');
  }

  getSingleNews(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/index/' + id);
  }

  getCategory(value: string) {
    return this.http.get(this.SERVER_URL + '/index/category/' + value);
  }

  getQuery(query: string) {
    return this.http.get(this.SERVER_URL + '/search/' + query);
  }


}
