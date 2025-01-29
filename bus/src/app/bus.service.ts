import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Bus } from './models/bus.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  apiUrl="https://fantastic-yodel-46rg4p5qvv7c7gjj-3000.app.github.dev/buses/";

  constructor( private http:HttpClient) { }
  addBus(bus:Bus):Observable<Bus>{
    return this.http.post<Bus>(this.apiUrl,bus);
  }
  getBusById(id:any):Observable<Bus>{
    return this.http.get<Bus>(this.apiUrl+id);
  }
  getBuses():Observable<Bus[]>{
    return this.http.get<Bus[]>(this.apiUrl);
  }
  updateBus(id:any,bus:Bus):Observable<Bus>{
    return this.http.put<Bus>(this.apiUrl+id,bus);
  }
  deleteBus(id:any):Observable<void>{
    return this.http.delete<void>(this.apiUrl+id);
  }
}
