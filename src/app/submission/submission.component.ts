import { Component, Inject, OnInit, Output } from '@angular/core';
import {StationService} from "../station.service";
import { Station } from '../model/station';
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  
  name1: string="";
  address1:string="";
  operational1:boolean= false;
  price1:boolean=false;
  cleanliness1:number=0;
  safeness1:number=0;
  newStation= [] as any;
  //stations: Object<Station[]> = null;
  onCreateStation(name:string, address:string){
    
    this.name1=name;
    this.address1 = address;
    console.log(this.name1, this.address1, this.operational1, this.price1, this.cleanliness1, this.safeness1);
    this.stationService.addStation({id: 0,name: this.name1, address: this.address1, operational: this.operational1,
       price: this.price1, cleanliness: this.cleanliness1,safeness:this.safeness1}).subscribe();
  }
  constructor(private stationService: StationService){
  }


}
