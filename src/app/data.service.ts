import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = `http://localhost:3000/products`;

  constructor(private http: HttpClient ) { }
  public sendGetRequest(){
    return this.http.get<any[]>(this.REST_API_SERVER)
  }
}
