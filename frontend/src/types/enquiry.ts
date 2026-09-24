export interface Enquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  preferredCountry?: string;
  preferredCourse?: string;
  city?: string;
  message?: string;
}
