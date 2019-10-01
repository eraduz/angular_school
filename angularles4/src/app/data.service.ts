import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get('http://www.omdbapi.com/?s=matrix&apikey=2a4818f4');
  }
}
