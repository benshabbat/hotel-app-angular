import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reservation } from '../reservation/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm {
  reservationForm: FormGroup;
  reservationId: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: Reservation,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1)]],
    });
    this.reservationId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      if (this.reservationId) {
        const updatedReservation = { ...this.reservationForm.value, id: +this.reservationId };
        this.reservationService.updateReservation(updatedReservation);
      } else {
        this.reservationService.addReservation(this.reservationForm.value);
        this.reservationForm.reset();
      }
      this.router.navigate(['/list']);
    }
  }

  ngOnInit() {
    if (this.reservationId) {
      const reservation = this.reservationService.getReservationById(+this.reservationId);
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }
}
