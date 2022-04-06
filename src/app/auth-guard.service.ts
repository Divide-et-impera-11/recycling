import { Injectable } from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router){

    }
     canActivate() {
         if(!this.auth.isLoggedIn()){
             this.router.navigateByUrl('/')
             return false
         }
         return true
     }
}
