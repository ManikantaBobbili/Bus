import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus-view',
  templateUrl: './bus-view.component.html',
  styleUrls: ['./bus-view.component.css']
})
export class BusViewComponent  implements OnInit{
  bus:any;
  busId:any;
  constructor(private busService:BusService, private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.busId = this.route.snapshot.paramMap.get('id');
    this.busService.getBusById(this.busId).subscribe((res)=>this.bus=res);
  }

}
