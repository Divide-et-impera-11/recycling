import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  trip = {
    tripId: 1,
    tripname: 'trip1'
  }

  constructor() { }

  ngOnInit() {
  }

}