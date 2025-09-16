import { Injectable } from '@angular/core';
import { ReservationI } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class Reservation {
  private reservations: ReservationI[] = [];
  constructor() {
    const savedReservations = localStorage.getItem('reservations');
    if (savedReservations) {
      this.reservations = JSON.parse(savedReservations);
    }
  }

  getReservations() {
    return this.reservations;
  }
  getReservationById(id: number) {
    return this.reservations.find((res) => res.id === id);
  }
  addReservation(reservation: ReservationI) {
    reservation.id = Math.floor(Math.random() * 10000);
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
  deleteReservation(id: number) {
    this.reservations = this.reservations.filter((res) => res.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
  updateReservation(updatedReservation: ReservationI) {
    const index = this.reservations.findIndex((res) => res.id === updatedReservation.id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
