import { Component, OnChanges, OnInit } from '@angular/core';
import { Station } from '../model/station';
import { StationCardComponent } from '../station-card/station-card.component';
import { StationService } from '../station.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Injecting Stations service
  constructor(private stationService: StationService) { }

  
  searchText: string="";
  searchList: Station[] = [];

  highlightedArray: Station[] = []; //max of 3 stations at all times
  listArray: Station[]= [];

  ngOnInit(): void {
    this.getStations(); // retrieve stations and run HighlightedInIT
    this.stationService.removeStation(11);
    console.log("ran init!");
  }

  HighlightedInIT(){
    this.listArray=[];
    this.highlightedArray=[];
    this.count=0;
    //run search to pick top three to pass to highlighted array and then to child to display
    for(let station of this.searchList){
      if(this.count<20){
        this.listArray.push(station);
        if(this.count<3){
          //add way to search for top 3
          this.highlightedArray.push(station);
        }
        this.count++;
      }
    }  
  }


  //not working yet
  count :number =0;
  //run fuctions and then pass arrays as inpust to children to display
  search(zipcode :string ){
    //resetting variables
    this.listArray=[];
    this.highlightedArray=[];
    this.count=0;

    //searching all for zipcode
    for(let station of this.searchList){
      if(station.address.includes(zipcode)){
        this.listArray.push(station);
      }
    }
     //search the list for top 3
     //need to add top of list function
     for(let hStation of this.listArray){
      if(this.count<3){
        //add way to search for top 3
        this.highlightedArray.push(hStation);
        console.log('added to highlighted');
      }
      this.count++;
    }
  }

  // get and subscribe to stations service
  getStations(): void {
    this.stationService.getStations()
      .subscribe(
        stations => {
          this.searchList = stations;
          this.HighlightedInIT();
        }
        );
  }
}
