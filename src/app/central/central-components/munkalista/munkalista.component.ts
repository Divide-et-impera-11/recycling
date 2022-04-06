import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/db.service';
import { Joblist } from 'src/app/model/joblist';
import { JoblistService } from 'src/app/service/joblist.service';
import { map } from "rxjs";

 /**
 * @title Toolbar 
 */
@Component({
  selector: 'munkalista-comp',
  templateUrl: 'munkalista.component.html',
 // styleUrls: ['toolbar-component.css'],
})
export class MunkaListaComponent {

   list$ : Observable<Joblist[]> = this.joblService.get();
   columns: {key: string, title: string}[] = [
        {key: 'NOVKOD', title: 'NOVKOD'},
        {key: 'NEV1', title: 'NEV1'},

    ]
    constructor(private dbservice : DatabaseService, private joblService : JoblistService) {}

    ngOnInit(){
       /* let v = this.joblService.get();
        let piped = v.pipe();
        piped.forEach((x : Joblist[]) => {
            console.log(x[1].NOVKOD);
        })*/

        console.log("munkalista component")

        /*
             const base = this.http.post('/login', user)
        const request = base.pipe(
            map((data : any) => {
                if(data.token){
                    this.saveToekn(data.token)
                }
                return data
            })
        )
        */
        //const base = this.http.post('/login', user)
        //settings
        //https://napster2210.github.io/ngx-spinner/
    }
}
