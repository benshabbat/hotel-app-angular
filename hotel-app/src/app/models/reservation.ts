export interface Reservation {
  id: number;
  guestName: string;
  guestEmail: string;
  roomNumber: number;
  checkInDate: Date;
  checkOutDate: Date;
}
