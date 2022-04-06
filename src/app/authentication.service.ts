import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, of } from "rxjs";
import { map } from "rxjs";
import {Router} from '@angular/router'

export interface UserDetails{
    id: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    exp: number
    iat: number
    role: number // hozááadott 
}

interface TokenResponse{
    token: string
}

export interface TokenPayload{
    id: number
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    role: number
}

@Injectable()
export class AuthenticationService{
    private token : string = "";
    private apiUrl : string = 'http://192.168.200.13:3000/'

    constructor(private http: HttpClient, private router : Router) {

    }
    private saveToekn(token: string) : void {
        localStorage.setItem('userToken', token)
        this.token = token;
    }
    private getToken() : string{
        if(!this.token){
            const userJson = localStorage.getItem('userToken');
            this.token = userJson != null ? userJson : ""; 
        }
        return this.token;
    
    }
    public getUserDetails() : UserDetails{
        const token = this.getToken();
        let payload
        if(token){
            payload = token.split('.')[1]
            payload = window.atob(payload)
            return JSON.parse(payload)
        }
        else{
            return  null as any //return null
        }
    }

    public isLoggedIn() : boolean {
        const user = this.getUserDetails()
        if(user){
            return user.exp > Date.now() / 1000
        }
        else{
            return false;
        }
    }

    public register(user : TokenPayload) : Observable<any>{
        console.log("register")
        console.log(user.role);
        console.log(user.username)
        const base = this.http.post(`${this.apiUrl}register`, user)
        //const base = this.http.post('/register', user)

        const request = base.pipe(
            map((data : any) => {
                if(data.token){
                    this.saveToekn(data.token)
                }
                return data
            })
        )

        return request
    }

    public login(user : TokenPayload) : Observable<any>{
        const base = this.http.post(`${this.apiUrl}login`, user)
        const request = base.pipe(
            map((data : any) => {
                if(data.token){
                    this.saveToekn(data.token)
                }
                return data
            })
        )

        return request
    }

    public profile() : Observable<any>{
        let v  = this.getToken()
        return this.http.get('/profile', {
            //${this.getToken()};
            headers: { Authorization: v.toString() }
        })
    }

    public logOut(): void {
        this.token = '';
        window.localStorage.removeItem('userToken')
        this.router.navigateByUrl('/')
    }
}