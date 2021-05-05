import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
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

  @Input() InStation : Station[] =[] ;

  @Output() outputEventDetailsApp: EventEmitter<Station> = new EventEmitter()
  
  //variables
  searchText: string="";
  count :number =0;
  innerCount : number =0;
  permList : Station[]= [];
  tempList: Station[] = [];
  best: Station[] =[]
  highlightedArray: Station[] = []; //max of 3 stations at all times
  listArray: Station[]= [];
  boolean : boolean = false; // flag for the suggested section
  tempStation!: Station;


  ngOnInit(): void {
    this.getStations(); // retrieve stations and run HighlightedInIT
  }

    //organizes the suggesed list of top stations based on passed list
  SuggestedInIT( useStation: Station[] ){
    //restting arrays// defining out temp list
    this.tempList=useStation
    this.listArray= [];
    this.highlightedArray=[];
    this.count=0;

    //disyplays all stations
    for(let station of this.tempList){
        if( this.count <35 ){
        this.listArray.push(station);
        this.count++;
      }
    }  

    //sets random stations to be compared to
    this.best[0] = this.getWorstStation(useStation)
    this.best[1] = this.getWorstStation(useStation)
    this.best[2] = this.getWorstStation(useStation)

    //compares the stations and replaces with better ones
    for(let hStation of this.tempList){
        this.boolean=false;
        if(this.addRatings(hStation)>this.addRatings(this.best[0]) && this.boolean==false){
          this.best[0]=hStation;
          this.boolean=true;
        }
        else if(this.addRatings(hStation)>this.addRatings(this.best[1])&& this.boolean==false){
          this.best[1]=hStation;
          this.boolean=true;
        }
        else if(this.addRatings(hStation)>this.addRatings(this.best[2])&& this.boolean==false){
          this.best[2]=hStation;
          this.boolean=true;
        }
    }
    this.highlightedArray=this.best;
  }

  
    //support method or sorting
    addRatings(station : Station){
      return station.cleanliness+station.safeness
    }


  //helper funtion to find THE WORST station
  getWorstStation(useStation: Station[]){
    this.tempList=useStation;
    this.tempStation=useStation[0];
    //compares the stations and replaces with better ones
    for(let station of this.tempList){
        if(this.addRatings(station)<this.addRatings(this.tempStation)){
          this.tempStation=station;
        }
    }
    return this.tempStation;
  }
 

  //run fuctions and then pass arrays as inpust to children to display
  search(zipcode :string ){
    //resetting variables
    this.tempList=this.permList;
    this.listArray=[];
    this.highlightedArray=[];

    //searching all for zipcode
    for(let station of this.tempList){
      if(station.address.includes(zipcode)){
        this.listArray.push(station);
      }
    }
    
    //takes care of suggested based on restricted list that matches zipcode
    this.SuggestedInIT(this.listArray);
  }




  //get and subscribe to stations service
  getStations(): void {
    this.stationService.getStations()
      .subscribe(
        stations => {
          this.permList = stations;
          this.SuggestedInIT(stations);
        }
        );
  }


 
  detailsDash(outStation : Station){
      console.log("station passed to dash")
      this.outputEventDetailsApp.emit(outStation)
  }

}
