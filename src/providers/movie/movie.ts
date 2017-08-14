import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatesMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey() );
  }

  getApiKey(){
    return "dafac22a84523ceb5c7b8dee0c16cb9b";
  }
}