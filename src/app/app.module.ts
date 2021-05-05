import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { StationCardComponent } from './station-card/station-card.component';
import { SubmissionComponent } from './submission/submission.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightedViewComponent } from './highlighted-view/highlighted-view.component';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListViewComponent,
    StationCardComponent,
    SubmissionComponent,
    DetailsComponent,
    DashboardComponent,
    HighlightedViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
