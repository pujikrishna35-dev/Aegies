export class CreateLeadDto {
  name: string;
  email: string;
  phone: string;
  city?: string;
  preferredCountry?: string;
  preferredCourse?: string;
  intakeYear?: number;
  source?: string;
}
