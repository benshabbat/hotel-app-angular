import { Component } from '@angular/core';
import { Reservation } from '../reservation/reservation';
import { ReservationI } from '../models/reservation';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-reservation-list',
  imports: [RouterLink],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList {
  reservations: ReservationI[] = [];
  constructor(private reservationService: Reservation) {
  }
  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id);
    this.reservations = this.reservationService.getReservations();
  } 


  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }
}
