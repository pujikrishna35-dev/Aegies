import { Injectable } from '@nestjs/common';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ALERT';
  time: string;
  link?: string;
  isRead: boolean;
}

@Injectable()
export class NotificationsService {
  private notifications: NotificationItem[] = [
    {
      id: 'notif-1',
      title: 'New Lead Registered',
      message: 'Rohan Verma submitted inquiry for MSc Computer Science (UK).',
      type: 'SUCCESS',
      time: '12 minutes ago',
      link: '/admin/leads',
      isRead: false,
    },
    {
      id: 'notif-2',
      title: 'Consultation Appointment Booked',
      message: 'Rahul Varma booked a 1-on-1 counseling slot for Sept 12 at Nellore branch.',
      type: 'INFO',
      time: '45 minutes ago',
      link: '/admin/consultations',
      isRead: false,
    },
    {
      id: 'notif-3',
      title: 'Visa Verification Required',
      message: 'Sneha Reddy uploaded Bank Solvency & Proof of Funds statement for Australia.',
      type: 'WARNING',
      time: '2 hours ago',
      link: '/admin/documents',
      isRead: false,
    },
    {
      id: 'notif-4',
      title: 'University CAS Issued',
      message: 'University of Birmingham released CAS for Ananya Deshmukh.',
      type: 'SUCCESS',
      time: '5 hours ago',
      link: '/admin/applications',
      isRead: true,
    },
  ];

  findAll() {
    return this.notifications;
  }

  markAsRead(id: string) {
    const item = this.notifications.find((n) => n.id === id);
    if (item) {
      item.isRead = true;
      return item;
    }
    return null;
  }

  markAllRead() {
    this.notifications.forEach((n) => (n.isRead = true));
    return { success: true };
  }
}
