import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Bus } from './models/bus.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  apiUrl="https://reimagined-winner-9wxqvgr65pxc7vwg-3000.app.github.dev/buses";

  constructor( private http:HttpClient) { }
  addBus(bus:Bus):Observable<Bus>{
    return this.http.post<Bus>(this.apiUrl,bus);
  }
  getBusById(id:number):Observable<Bus>{
    return this.http.get<Bus>(this.apiUrl+id);
  }
  getBuses():Observable<Bus[]>{
    return this.http.get<Bus[]>(this.apiUrl);
  }
  updateBus(id:number,bus:Bus):Observable<Bus>{
    return this.http.put<Bus>(this.apiUrl+id,bus);
  }
  deleteBus(id:number):Observable<void>{
    return this.http.delete<void>(this.apiUrl+id);
  }
}
