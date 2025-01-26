import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Bus } from '../models/bus.model';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css']
})
export class BusFormComponent implements OnInit {
  id: number = 0;
  newBus: Bus = {
    busNumber: '',
    routeSource: '',
    routeDestination: '',
    passengerName: '',
    bookingDate: ''
  };
  isEditMode: boolean = false;
  constructor(private busService: BusService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;
      this.busService.getBusById(this.id).subscribe((data) => {
        this.newBus = data;
      })
    }
  }
  addOrEditBus() {

    if (!this.newBus) {
      if (this.isEditMode) {
        this.busService.updateBus(this.id, this.newBus).subscribe((data) => {
          this.route.navigate(['/viewBuses'])
        });
      }
      else {
        this.busService.addBus(this.newBus).subscribe((data) => {
          this.busService.getBuses();
          this.route.navigate(['/viewBuses']);
        });
      }
    }
  }


}
