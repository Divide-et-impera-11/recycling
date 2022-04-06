import {Component, ElementRef, ViewChild, VERSION} from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Router } from '@angular/router' /* added */

@Component({
    selector: 'sidenav-comp',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']    
})

export class SidenavComponent {
    private  sideBar : any;
    private btn : any
    public role : number
    trip = {
        tripId: 1,
        tripname: 'trip1'
      }
    guard = {
        'User': 2
    }; //key : value
    @ViewChild("btn") closeBtn: any;
    constructor(private ElByClassName: ElementRef,  /* added */ private router: Router, auth : AuthenticationService) {
        this.role = auth.getUserDetails().role;
        console.log("A belépett felhasználónak a joga:" + this.role);
    }
    ngAfterViewInit() {
         this.sideBar = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(
        '.sidebar'
        );
    }
    menuBtnChange() {
        if(this.sideBar.classList.contains("open")){
            this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        }else {
            this.closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
        }
    }
    cBtn(){
        this.sideBar.classList.toggle("open");
        this.menuBtnChange()
    }
    sBtn(){
        this.sideBar.classList.toggle("open");
        this.menuBtnChange(); 
    }

}