import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joblist } from '../model/joblist';
@Injectable({
  providedIn: 'root'
})
export class JoblistService {

  apiUrl : string = 'http://192.168.200.13:3000/db/'

  constructor(
    private http : HttpClient
  ) { }

  get(id: number = 0) : Observable<Joblist[]> {
      return this.http.get<Joblist[]>(`${this.apiUrl}select`)
  }
  create(Joblist : Joblist) : Observable<Joblist>{
    return this.http.post<Joblist>(`${this.apiUrl}/`,Joblist);

  }
  update(Joblist : Joblist) : Observable<Joblist>{
    return this.http.put<Joblist>(`${this.apiUrl}/${Joblist.NOVKOD}`, Joblist);
  }
  delete(Joblist : Joblist) : Observable<Joblist>{
    return this.http.delete<Joblist>(`${this.apiUrl}/${Joblist.NOVKOD}`);
  }
}
