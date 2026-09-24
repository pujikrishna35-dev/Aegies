import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private settingsStore: Record<string, any> = {
    general: {
      brandName: 'Aegis Overseas Education Services',
      tagline: 'Study Abroad. Build Your Future.',
      supportPhone: '+91 91112 43210',
      supportEmail: 'info@aegisoverseas.com',
      whatsappNumber: '+91 91112 43210',
      headquartersAddress: '123 Education Street, Somajiguda, Hyderabad',
      branches: ['Nellore (Grand Trunk Road)', 'Tirupati (Bhavani Nagar)', 'Hyderabad (Somajiguda)'],
    },
    homepage: {
      heroHeadline: 'Shape Your Global Future with India’s Most Trusted Overseas Education Partner',
      heroSubheadline: '100% personalized counselling, admissions to 850+ top universities in 8 countries, and a 99.2% visa success track record.',
      statsUniversities: '850+',
      statsCountries: '8+',
      statsVisaRate: '99.2%',
      statsScholarships: '₹12 Cr+',
      whyChoose1Title: 'Direct University Representation',
      whyChoose1Text: 'Official tier-1 partner tie-ups with leading global institutions across UK, US, Australia, and Canada.',
      whyChoose2Title: 'Zero-Cost Initial Counselling',
      whyChoose2Text: 'Honest, impartial guidance from certified counselors without hidden fee traps.',
      whyChoose3Title: 'End-to-End Visa Security',
      whyChoose3Text: 'Dedicated visa file vetting, financial evidence validation, and realistic mock embassy interviews.',
    },
    contact: {
      workingHours: 'Monday – Saturday: 9:30 AM to 6:30 PM',
      emergencyHelpline: '+91 91112 43210',
      responsePromise: 'Guaranteed response within 2 hours during working hours.',
    },
  };

  getAll() {
    return this.settingsStore;
  }

  getByCategory(cat: string) {
    return this.settingsStore[cat] || null;
  }

  updateCategory(cat: string, body: any) {
    this.settingsStore[cat] = { ...this.settingsStore[cat], ...body };
    return { success: true, data: this.settingsStore[cat] };
  }
}
