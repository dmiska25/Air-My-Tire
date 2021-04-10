import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Air-My-Tire';

  //show variables for *ngIF
  showDashboard: boolean = true;
  showDetails: boolean = false;
  showSubmission: boolean = false;


  //methods to change shown components
  showDashboardComponent(){
    this.showDashboard = true;
    this.showDetails = false;
    this.showSubmission =false;
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




}
