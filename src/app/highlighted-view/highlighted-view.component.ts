import { Component, OnInit } from '@angular/core';
import { Station } from '../model/station';
import { STATIONS } from '../test-station-db';

@Component({
  selector: 'app-highlighted-view',
  templateUrl: './highlighted-view.component.html',
  styleUrls: ['./highlighted-view.component.css']
})
export class HighlightedViewComponent implements OnInit {

  constructor() { }

  //find way on search event to find 3 top stations and pass this array to child in template
  stationList: Station[] = STATIONS;

  ngOnInit(): void {
  }

}
