import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reservation } from '../reservation/reservation';



@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm {
  reservationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private reservationService: Reservation) {
    this.reservationForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 10000)],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value);
      this.reservationForm.reset();
    }
  }
}
