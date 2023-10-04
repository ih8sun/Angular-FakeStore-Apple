import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { accesorioModel } from '../model/accesorioModel';

@Injectable({
  providedIn: 'root'
})
export class AccesorioService {

  URL = 'http://localhost:8080/accesorio';
  constructor(private http: HttpClient) { }

  getAccesorios(page: number, size: number) {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    
    
    return this.http.get(this.URL, { headers: header, params: params });
  }


  postAccesorios = (data: accesorioModel) => {
    return this.http.post<accesorioModel>(this.URL, data).pipe(map((emp) => data));
  };


  deleteAccesorios = (id: number) => {
    return this.http.delete<accesorioModel>(`${this.URL}/${id}`).pipe(map((emp) => id));
  };

  putAccesorios = (data: accesorioModel) => {
    return this.http.put<accesorioModel>(this.URL, data).pipe(map((emp) => data));
  };
}
