import { Component, OnInit } from '@angular/core';
import { Station } from './model/station';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   // Injecting Stations service
   constructor() { }

   
  ngOnInit(): void {
  }

  title = 'Air-My-Tire';
  Stations :Station[] =[] ;




  //show variables for *ngIF
  showDashboard: boolean = true;
  showDetails: boolean = false;
  showSubmission: boolean = false;


  //methods to change shown components
  showDashboardComponent(){
    this.showDashboard = true;
    this.showDetails = false;
    this.showSubmission =false;
    // window.location.reload();
  }
  showDetailsComponent(){
    this.showDashboard = false;
    this.showDetails = true;
    this.showSubmission =false;
  }
  showSubmissionComponent(){
    this.showDashboard = false;
    this.showDetails = false;
    this.showSubmission = true;
  }

  submission( string: string){
    this.showSubmissionComponent();
  }

  search( string : string){
    this.showDashboardComponent();
  }

  detailsStation! : Station
  detailsApp(outStation : Station){
    this.detailsStation=outStation;
    console.log("station passed to App")
    this.showDetailsComponent();
  }

  submit(string : string){
    this.showDashboardComponent();
  }

  deleted(string: string){
    this.showDashboardComponent();
  }

}
