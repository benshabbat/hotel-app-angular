import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reservation } from '../reservation/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationI } from '../models/reservation';

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
        this.reservationService.updateReservation(+this.reservationId, this.reservationForm.value);
      } else {
        this.reservationService.addReservation(this.reservationForm.value);
      }
      this.router.navigate(['/list']);
    }
  }

  ngOnInit() {
    if (this.reservationId) {
      this.reservationService.getReservationById(+this.reservationId).subscribe((reservation: ReservationI | undefined) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }
}
