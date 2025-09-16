import { Routes } from '@angular/router';
import { Home } from './home/home'; // הוסף ייבוא מתאים
import { ReservationForm } from './reservation-form/reservation-form';
import { ReservationList } from './reservation-list/reservation-list';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'new',
    component: ReservationForm,
  },
  {
    path: 'list',
    component: ReservationList,
  },
  {
    path: 'edit/:id',
    component: ReservationForm,
  }
];
