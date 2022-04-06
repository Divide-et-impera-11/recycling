import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-trippath',
  templateUrl: './trippath.component.html',
  styleUrls: ['./trippath.component.css']
})
export class TrippathComponent implements OnInit {

  tripId = 0;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.tripId = +this.route.snapshot.params['id'];
  }

}