import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { STATIONS } from './test-station-db';
import { Observable, of } from 'rxjs';
import { Station } from './model/station';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  //vars
  url: string = 'https://air-my-tire-default-rtdb.firebaseio.com/stations.json';
  stations: Observable<Station[]> = this.getStations();
  nextID: number = 0;


  // retrieve stations
  getStations(): Observable<Station[]> {
    return this.httpServ.get<Station[]>
      (this.url)
      .pipe(
         map( data => {
          // assign maped data to array
          let stationArray: Station[] = [];
          for(let key in data)
            stationArray.push(data[key]);

          // get current next id
          this.nextID = (stationArray.length > 0) ? 
            Math.max(...stationArray.map(station=>station.id))+1 : 0;

          return stationArray;
         })
      );
  }


  // add station and retrieve updated stations list
  addStation(station: Station): void {
    this.httpServ.post(this.url, station).subscribe( _ => this.getStations().subscribe());
  }

  // update station and retrieve updated stations list
  updateStation(station: Station): void {
    this.httpServ.get<Station[]>
      (this.url)
      .pipe(
         map( data => {
          // find key assosiated with id and send put request
          console.log(data.length);
          for(let key in data) {
            console.log(data[key].id);
            if(data[key].id == station.id) {
              this.httpServ.put
                ("https://air-my-tire-default-rtdb.firebaseio.com/stations/"+key+".json", station)
                .subscribe();
            }
          }

          // retrieve updated stations list
          this.getStations().subscribe();
         })
      ).subscribe();
  }

  // remove station and retrieve updated stations list
  removeStation(id: number): void {
    this.httpServ.get<Station[]>
      (this.url)
      .pipe(
         map( data => {
          // find key assosiated with id and send delete request
          console.log(data.length);
          for(let key in data) {
            console.log(data[key].id);
            if(data[key].id == id) {
              this.httpServ.delete
                ("https://air-my-tire-default-rtdb.firebaseio.com/stations/"+key+".json")
                .subscribe();
            }
          }

          // retrieve updated stations list
          this.getStations().subscribe();
         })
      ).subscribe();
  }

  // init server data
  initFirebase() {
    STATIONS.map( station => this.httpServ.post(this.url, station).subscribe());
  }


  constructor(private httpServ: HttpClient) {  }
}