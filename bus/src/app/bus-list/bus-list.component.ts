import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
import { Bus } from '../models/bus.model';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: Bus[] = [];
  constructor(private busService: BusService, private router: Router) { }

  ngOnInit(): void {
    this.loadBuses();
  }

  loadBuses() {
    this.busService.getBuses().subscribe((data) => {
      this.buses = data;
    });
  }
  editBus(id:any) {
    this.router.navigate(['editBus/', id]);
  }
  deleteBus(id:any) {
    this.router.navigate(['confirmDelete/', id]);
  }

  
}
