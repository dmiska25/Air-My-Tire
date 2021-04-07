import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SearchComponent } from './search/search.component';
import { StationCardComponent } from './station-card/station-card.component';
import { SubmissionComponent } from './submission/submission.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListViewComponent,
    SearchComponent,
    StationCardComponent,
    SubmissionComponent,
    DetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
