export class LeadEntity {
  id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  preferredCountry?: string;
  preferredCourse?: string;
  intakeYear?: number;
  status: string;
  source?: string;
  createdAt: Date;
}
