import { Component, NgZone, OnInit } from '@angular/core';
import { Bus } from '../models/bus.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  
  // bus:Bus;
    bus: Bus = {
    id:0,
    busNumber: '',
    routeSource: '',
    routeDestination: '',
    passengerName: '',
    bookingDate: ''
  };
  id!:number;
  
  constructor(private ng:NgZone,private route:ActivatedRoute,private busService:BusService,private r :Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.busService.getBusById(this.id).subscribe((data)=>{
        this.bus=data;
      })
    });
  }
  confirmDelete(id:any){
    this.busService.deleteBus(id).subscribe((data)=>{
      this.r.navigate(['viewBuses']);
    });
    
  }
  cancelDelete():void{
      this.r.navigate(['viewBuses']);
  };

}
