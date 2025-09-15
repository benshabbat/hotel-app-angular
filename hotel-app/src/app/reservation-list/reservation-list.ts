import { Component } from '@angular/core';
import { Reservation } from '../reservation/reservation';
import { ReservationI } from '../models/reservation';


@Component({
  selector: 'app-reservation-list',
  imports: [],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList {
  reservations: ReservationI[] = [];
  constructor(private reservationService: Reservation) {
  }

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }
}
