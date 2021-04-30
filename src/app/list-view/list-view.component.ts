import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Station } from '../model/station';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  //Input Array
  @Input() inputArray :Station[] = [];

  @Output() outputEventDetailsDash: EventEmitter<Station> = new EventEmitter()

 
  detailsList(outStation : Station){
    console.log("station passed to list")
    this.outputEventDetailsDash.emit(outStation)
  }

  constructor() { }

  ngOnInit(): void {}

  }

