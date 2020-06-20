import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  // This is to fetch all news items from the backend server
  getAllItems(){
    return this.http.get(this.SERVER_URL+'/index');
  }

}
