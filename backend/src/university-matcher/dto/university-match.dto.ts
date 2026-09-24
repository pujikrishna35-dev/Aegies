export class UniversityMatchSearchDto {
  studyLevel!: string;
  course!: string;
  country!: string;
  englishTest!: string; // 'IELTS' | 'PTE' | 'TOEFL' | 'Duolingo' | 'OET' | 'NONE'
  englishScore?: number;
  budget!: string; // 'under10' | '10-20' | '20-30' | '30-40' | '40-50' | 'above50'
  intakePreference?: string;
}

export class UpdateWeightsDto {
  course!: number;
  country!: number;
  studyLevel!: number;
  budget!: number;
  english!: number;
  intake!: number;
  eligibility!: number;
}
