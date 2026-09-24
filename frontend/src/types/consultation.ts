export interface Consultation {
  id?: string;
  studentName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  mode: 'online' | 'in-person';
  preferredOffice?: string;
}
