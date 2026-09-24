import { Injectable } from '@nestjs/common';

export interface DocumentItem {
  id: string;
  studentName: string;
  studentEmail: string;
  title: string;
  category: 'PASSPORT' | 'ACADEMIC' | 'FINANCIAL' | 'TEST_SCORE' | 'VISA' | 'OTHER';
  fileUrl: string;
  fileSize: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED';
  notes?: string;
  uploadedAt: string;
}

@Injectable()
export class DocumentsService {
  private documents: DocumentItem[] = [
    {
      id: 'doc-1',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      title: 'Passport Copy (Front & Back)',
      category: 'PASSPORT',
      fileUrl: '/mock/docs/rohan_passport.pdf',
      fileSize: '1.8 MB',
      status: 'VERIFIED',
      notes: 'Valid until 2032. Clear biometric page scan.',
      uploadedAt: 'Today, 09:30 AM',
    },
    {
      id: 'doc-2',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      title: 'B.Tech Consolidated Marks Memorandum',
      category: 'ACADEMIC',
      fileUrl: '/mock/docs/rohan_transcripts.pdf',
      fileSize: '3.4 MB',
      status: 'VERIFIED',
      notes: 'Verified 8.2 CGPA with provisional certificate.',
      uploadedAt: 'Yesterday',
    },
    {
      id: 'doc-3',
      studentName: 'Ananya Deshmukh',
      studentEmail: 'ananya.d@example.com',
      title: 'IELTS Academic Score Card (7.5 Bands)',
      category: 'TEST_SCORE',
      fileUrl: '/mock/docs/ananya_ielts.pdf',
      fileSize: '850 KB',
      status: 'VERIFIED',
      notes: 'TRF verified online with IDP.',
      uploadedAt: 'Sep 6, 2026',
    },
    {
      id: 'doc-4',
      studentName: 'Sneha Reddy',
      studentEmail: 'sneha.reddy@example.com',
      title: 'Bank Solvency & Proof of Funds Statement',
      category: 'FINANCIAL',
      fileUrl: '/mock/docs/sneha_solvency.pdf',
      fileSize: '2.1 MB',
      status: 'PENDING',
      notes: 'Awaiting CA statement stamping.',
      uploadedAt: 'Sep 7, 2026',
    },
  ];

  findAll(filters?: { studentId?: string; category?: string }) {
    let list = [...this.documents];
    if (filters?.category && filters.category !== 'ALL') {
      list = list.filter((d) => d.category === filters.category);
    }
    return list;
  }

  create(dto: Partial<DocumentItem>) {
    const doc: DocumentItem = {
      id: 'doc-' + Date.now(),
      studentName: dto.studentName || 'Student Name',
      studentEmail: dto.studentEmail || '',
      title: dto.title || 'Uploaded Document',
      category: dto.category || 'OTHER',
      fileUrl: dto.fileUrl || '/mock/docs/file.pdf',
      fileSize: dto.fileSize || '1.2 MB',
      status: 'PENDING',
      notes: dto.notes || '',
      uploadedAt: 'Just now',
    };
    this.documents.unshift(doc);
    return doc;
  }

  updateStatus(id: string, status: string, notes?: string) {
    const doc = this.documents.find((d) => d.id === id);
    if (doc) {
      doc.status = status as any;
      if (notes !== undefined) doc.notes = notes;
      return doc;
    }
    return null;
  }

  remove(id: string) {
    this.documents = this.documents.filter((d) => d.id !== id);
    return { success: true };
  }
}
