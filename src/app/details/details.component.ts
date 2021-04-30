import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Station } from '../model/station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private stationService: StationService) { }
  @Input() detailedStation! :Station; 
  @Output() outputEventDeleted: EventEmitter<string> = new EventEmitter()

  link = "";
  address = "";
  search ="https://www.google.com/maps/place/";


  ngOnInit(): void {
    this.address = this.detailedStation.address;
    //takes address and turns it into websearchable function
    this.address=this.address.split(" ").join('+');
    this.address=this.address.split(",").join('+');
    this.address=this.address.split(".").join('+');
    this.link = this.search+this.address+"";
    console.log(this.link)
  }

  Delete(){
    this.stationService.removeStation(this.detailedStation.id);
    this.outputEventDeleted.emit(this.detailedStation.id+" Deleted")
  }

  showMap(){

  }
}
