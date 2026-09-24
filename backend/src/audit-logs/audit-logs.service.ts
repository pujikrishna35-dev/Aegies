import { Injectable } from '@nestjs/common';

export interface AuditLogItem {
  id: string;
  user: string;
  role: string;
  action: string;
  entity: string;
  details: string;
  ipAddress: string;
  timestamp: string;
}

@Injectable()
export class AuditLogsService {
  private logs: AuditLogItem[] = [
    {
      id: 'log-1',
      user: 'Aegis Super Admin',
      role: 'SUPER_ADMIN',
      action: 'UPDATE_STATUS',
      entity: 'Lead #lead-1 (Rohan Verma)',
      details: 'Status changed from NEW to COUNSELLING_SCHEDULED',
      ipAddress: '127.0.0.1',
      timestamp: 'Today, 10:48 AM',
    },
    {
      id: 'log-2',
      user: 'Pooja Sharma',
      role: 'COUNSELLOR',
      action: 'UPDATE_STAGE',
      entity: 'Application #app-101',
      details: 'Application progressed to OFFER_LETTER stage',
      ipAddress: '192.168.1.15',
      timestamp: 'Today, 09:20 AM',
    },
    {
      id: 'log-3',
      user: 'Visa Document Officer',
      role: 'DOCUMENT_MANAGER',
      action: 'VERIFY_DOCUMENT',
      entity: 'Document #doc-1 (Passport Copy)',
      details: 'Marked document as VERIFIED',
      ipAddress: '192.168.1.22',
      timestamp: 'Yesterday, 04:35 PM',
    },
  ];

  findAll() {
    return this.logs;
  }

  create(dto: Partial<AuditLogItem>) {
    const log: AuditLogItem = {
      id: 'log-' + Date.now(),
      user: dto.user || 'Admin User',
      role: dto.role || 'ADMIN',
      action: dto.action || 'MODIFY',
      entity: dto.entity || 'General',
      details: dto.details || '',
      ipAddress: dto.ipAddress || '127.0.0.1',
      timestamp: 'Just now',
    };
    this.logs.unshift(log);
    return log;
  }
}
