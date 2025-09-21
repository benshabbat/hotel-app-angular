import { Injectable } from '@angular/core';
import { ReservationI } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Reservation {
  private apiUrl = 'http://localhost:3000/reservations';
  private reservations: ReservationI[] = [];
  constructor(private http: HttpClient) { }

  getReservations(): Observable<ReservationI[]> {
    return this.http.get<ReservationI[]>(this.apiUrl);
  }
  
  getReservationById(id: number): Observable<ReservationI> {
    return this.http.get<ReservationI>(`${this.apiUrl}/${id}`);
  }
  addReservation(reservation: ReservationI): Observable<ReservationI> {
    return this.http.post<ReservationI>(this.apiUrl, reservation);
  }
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`  );
  }
  updateReservation(id: number, updatedReservation: ReservationI) {
    const index = this.reservations.findIndex((res) => res.id === id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
  }
}
