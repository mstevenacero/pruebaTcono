import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.BACK_URL;
  }
  post(endpoint: string, form: any) {
    return this.http.post(`${this.url}${endpoint}`, form);
  }
  put(endpoint: string,parameters:string,form: any) {
    return this.http.put(`${this.url}${endpoint}/${parameters}`, form);
  }
  get(endpoint: string) {
    return this.http.get(`${this.url}${endpoint}`);
  }
  delete(endpoint: string,parameters:string) {
    return this.http.delete(`${this.url}${endpoint}/${parameters}`);
  }
}
