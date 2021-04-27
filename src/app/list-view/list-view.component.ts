import { Component, Input, OnInit} from '@angular/core';
import { Station } from '../model/station';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  //Input Array
  @Input() inputArray :Station[] = [];


  constructor() { }

  ngOnInit(): void {}

  }

