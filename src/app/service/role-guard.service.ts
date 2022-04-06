import { Injectable } from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from "rxjs";
import { AuthenticationService } from "../authentication.service";


@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router){

    }
     canActivate(route: ActivatedRouteSnapshot) {
       console.log("ide")
       const er = route.data["expectedRole"];
       if(!this.auth.isLoggedIn() || this.auth.getUserDetails().role < er){
             this.router.navigateByUrl('/central/403')
             return false
         }
         return true
     }
}
