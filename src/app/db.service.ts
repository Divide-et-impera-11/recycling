import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, of } from "rxjs";
import { map } from "rxjs";
import {Router} from '@angular/router'

interface Table{
  //......
}

@Injectable()
export class DatabaseService{
    constructor(private http: HttpClient, private router : Router) {

    }

   /* public profile() : Observable<any>{
        const base = this.http.post('/login', user)
        const request = base.pipe(
            map((data : any) => {

                return data
            })
        )

        return request

    }*/
    //database managment
    public dbSelect() : any{
        this.http.post<any>('/select', { query: '' }).subscribe({
            next: data => {
                return data;
            },
            error: error => {
                //this.errorMessage = error.message;
                console.error('There was an error!', error);
                return {error : 500};
            }
         });
      }
}