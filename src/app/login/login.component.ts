import {Component, OnInit} from '@angular/core'
import {AuthenticationService, TokenPayload} from '../authentication.service'
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";



@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {
    credentials: TokenPayload = {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        role: 0,

    }
    ngOnInit(){
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 5000);
    }
    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private spinner: NgxSpinnerService) {

        }

    login(){
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/central')
               
            },
            err => {
               // console.error(err)
               console.log("helytelen email vagy jelszó vagy mindkettő")
            }
        )
    }
}



