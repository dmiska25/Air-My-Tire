import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Station } from '../model/station';
import { STATIONS } from '../test-station-db';

@Component({
  selector: 'app-highlighted-view',
  templateUrl: './highlighted-view.component.html',
  styleUrls: ['./highlighted-view.component.css']
})
export class HighlightedViewComponent implements OnInit {

  //input list for apps
@Input() hInputArray :Station[] = [];

@Output() outputEventDetailsDash: EventEmitter<Station> = new EventEmitter()

  constructor() { }

  detailsHighlight(outStation : Station){
    console.log("station passed to list")
    this.outputEventDetailsDash.emit(outStation)
  }

  ngOnInit(): void {
  }

}
