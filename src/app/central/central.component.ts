import{Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    templateUrl: './central.component.html',
    styleUrls: ['./central-component.css']
    
})
export class CentralComponent implements OnInit {
    trip = {
        tripId: 1,
        tripname: 'trip1'
      }
      illustration ={
          url: ''
      }

      constructor( 
          private router: Router,
          private spinner: NgxSpinnerService) { 

          }

      ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 5000);

          //illustration
          this.illustration.url = '/assets/illustration/illustration-people-taking-care-plants/plant.jpg';
      }
}
