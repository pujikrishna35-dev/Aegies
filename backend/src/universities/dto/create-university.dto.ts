export class CreateUniversityDto {
  name: string;
  country: string;
  city: string;
  ranking: number;
  acceptanceRate?: string;
  tuitionRange?: string;
}
