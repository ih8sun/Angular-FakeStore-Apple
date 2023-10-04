import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { iphoneModel } from '../model/iphoneModel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IphoneService {

  URL = 'http://localhost:8080/iphone';
  constructor(private http: HttpClient) { }

  getIphones(page: number, size: number) {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    
    
    return this.http.get(this.URL, { headers: header, params: params });
  }


  postIphones = (data: iphoneModel) => {
    return this.http.post<iphoneModel>(this.URL, data).pipe(map((emp) => data));
  };


  deleteIphones = (id: number) => {
    return this.http.delete<iphoneModel>(`${this.URL}/${id}`).pipe(map((emp) => id));
  };

  putIphones = (data: iphoneModel) => {
    return this.http.put<iphoneModel>(this.URL, data).pipe(map((emp) => data));
  };

}
