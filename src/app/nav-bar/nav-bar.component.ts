import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() outputEventSubission: EventEmitter<string> = new EventEmitter();
  @Output()  outputEventSearch: EventEmitter<string> = new EventEmitter();

  clickSubmission()
  {
    this.outputEventSubission.emit(" :) ");
  }
  clickSearch(){
    this.outputEventSearch.emit(" :) ");
  }


}
