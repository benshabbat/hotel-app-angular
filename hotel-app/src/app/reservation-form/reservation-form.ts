import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reservation } from '../reservation/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm {
  reservationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: Reservation,
    private router: Router
  ) {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value);
      this.reservationForm.reset();
      this.router.navigate(['/list']);
    }
  }
}
