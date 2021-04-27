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
  keyedStations: Station[] = [];
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

          this.keyedStations = data;

          return stationArray;
         }),

      );
  }


  // add station and retrieve updated stations list
  addStation(station: Station): Observable<Station> {
    station.id = this.nextID;
    return this.httpServ.post<Station>(this.url, station).pipe(
      tap(
        _ => this.getStations().subscribe()
      )
    );
    console.log("ran add station");
  }

  // update station and retrieve updated stations list
  updateStation(station: Station): Observable<Station> {
    let stationKey: string = 'void';

    // find key assosiated with id and send put request
    console.log(this.keyedStations.length);
    for(let key in this.keyedStations) {
      console.log(this.keyedStations[key].id);
      if(this.keyedStations[key].id == station.id) {
        stationKey = key;
      }
    }

    return this.httpServ.put<Station>
    ("https://air-my-tire-default-rtdb.firebaseio.com/stations/"+stationKey+".json", station)
      .pipe(
        tap(
          _ => this.getStations().subscribe()
        )
      )
  }

  // remove station and retrieve updated stations list
  removeStation(id: number): Observable<Station> {
    let stationKey: string = 'void';

    // find key assosiated with id and send delete request
    console.log(this.keyedStations.length);
    for(let key in this.keyedStations) {
      console.log(this.keyedStations[key].id);
      if(this.keyedStations[key].id == id) {
        stationKey = key;
      }
    }

    return this.httpServ.delete<Station>
    ("https://air-my-tire-default-rtdb.firebaseio.com/stations/"+stationKey+".json")
      .pipe(
        tap(
          _ => this.getStations().subscribe()
        )
      )
  }

  // init server data
  initFirebase() {
    STATIONS.map( station => this.httpServ.post(this.url, station).subscribe());
  }


  constructor(private httpServ: HttpClient) {  }
}