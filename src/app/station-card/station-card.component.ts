import { Component, Input, OnInit } from '@angular/core';
import {Station} from '../model/station';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent implements OnInit {

  constructor() { }

  @Input()
  station!: Station;

  ngOnInit(): void {
  }

}
