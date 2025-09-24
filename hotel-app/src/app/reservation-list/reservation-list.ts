import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Reservation } from '../reservation/reservation';
import { ReservationI } from '../models/reservation';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-reservation-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList {
  reservations: ReservationI[] = [];
  constructor(private reservationService: Reservation) {
  }
  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Deleted reservation with id:", id);
    });
  } 


  ngOnInit() {
    this.reservationService.getReservations().subscribe((data: ReservationI[]) => {
      this.reservations = data;
    });
  }
}
