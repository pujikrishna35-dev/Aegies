import { Injectable } from '@nestjs/common';

export interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'UNREAD' | 'IN_PROGRESS' | 'RESOLVED';
  source: string;
  createdAt: string;
}

@Injectable()
export class EnquiriesService {
  private enquiries: EnquiryItem[] = [
    {
      id: 'enq-1',
      name: 'Venkatesh Babu',
      email: 'venkatesh.b@example.com',
      phone: '+91 9949011223',
      subject: 'Masters in AI after 3 Years B.Sc Computer Science',
      message: 'Hello team, do universities in the UK or Ireland accept 3-year bachelor degrees for MSc Artificial Intelligence without pre-masters? Please advise on options.',
      status: 'UNREAD',
      source: 'Contact Us Form',
      createdAt: 'Today, 08:30 AM',
    },
    {
      id: 'enq-2',
      name: 'Dr. Srinivas Rao (Parent)',
      email: 'dr.srinivas@example.com',
      phone: '+91 9849200334',
      subject: 'Inquiry regarding medical PG options in the UK & Australia',
      message: 'Looking for clinical postgraduate diploma/masters pathway for my daughter who recently completed MBBS. Please share counselor contact.',
      status: 'IN_PROGRESS',
      source: 'Website Header CTA',
      createdAt: 'Yesterday, 03:10 PM',
    },
    {
      id: 'enq-3',
      name: 'Mounika Reddy',
      email: 'mounika.r@example.com',
      phone: '+91 9490123456',
      subject: 'Education loan without collateral for Canada MS',
      message: 'Can I get a 30 lakh loan sanction without property collateral for Fanshawe or Conestoga college PG courses? Need assistance.',
      status: 'RESOLVED',
      source: 'Services Page',
      createdAt: 'Sep 6, 2026',
    },
  ];

  findAll() {
    return this.enquiries;
  }

  create(dto: Partial<EnquiryItem>) {
    const item: EnquiryItem = {
      id: 'enq-' + Date.now().toString().slice(-4),
      name: dto.name || 'Anonymous',
      email: dto.email || '',
      phone: dto.phone || '',
      subject: dto.subject || 'General Enquiry',
      message: dto.message || '',
      status: 'UNREAD',
      source: dto.source || 'Website Form',
      createdAt: 'Just now',
    };
    this.enquiries.unshift(item);
    return item;
  }

  updateStatus(id: string, status: string) {
    const item = this.enquiries.find((e) => e.id === id);
    if (item) {
      item.status = status as any;
      return item;
    }
    return null;
  }

  remove(id: string) {
    this.enquiries = this.enquiries.filter((e) => e.id !== id);
    return { success: true };
  }
}
