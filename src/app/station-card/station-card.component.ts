import { Component, Input, OnInit } from '@angular/core';
import {Station} from '../model/station';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent implements OnInit {

  constructor() { }

  //outputt event to show deatils like in HW3
  //passes contact clcked



  @Input()
  station!: Station;

  ngOnInit(): void {
  }




}
