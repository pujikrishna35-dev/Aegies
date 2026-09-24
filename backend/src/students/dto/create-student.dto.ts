export class CreateStudentDto {
  name: string;
  email: string;
  phone: string;
  targetCountry: string;
  intendedDegree: string;
  ieltsGpa?: string;
}
