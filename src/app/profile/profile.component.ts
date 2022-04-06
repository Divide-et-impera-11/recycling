import {Component} from '@angular/core'
import {AuthenticationService, UserDetails} from '../authentication.service'
@Component({
    selector: 'profile-comp',
    templateUrl: './profile.component.html'
})
export class ProfileComponent{
    details: UserDetails | undefined

    constructor(private auth: AuthenticationService){}
    ngOnInit(){
        this.auth.profile().subscribe(
            user => {
                this.details = user
            },
            err => {
                console.error(err)
            }
        )
    }
}