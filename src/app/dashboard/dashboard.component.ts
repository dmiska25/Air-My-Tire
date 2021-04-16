import { Component, OnInit } from '@angular/core';
import { Station } from '../model/station';
import { StationCardComponent } from '../station-card/station-card.component';
import { STATIONS } from '../test-station-db';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  
  searchText: string="";

  searchList: Station[] = STATIONS;

  highlightedArray: Station[] = []; //max of 3 stations at all times
  listArray: Station[]= [];

  ngOnInit(): void {
    this.HighlightedInIT();
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
}
