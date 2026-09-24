import { Injectable } from '@nestjs/common';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'COUNSELLOR' | 'CONTENT_MANAGER' | 'DOCUMENT_MANAGER';
  phone?: string;
  status: 'ACTIVE' | 'INACTIVE';
  lastLogin?: string;
  createdAt: string;
}

@Injectable()
export class UsersService {
  private users: AdminUser[] = [
    {
      id: 'usr-1',
      email: 'admin@aegisoverseas.com',
      name: 'Aegis Super Admin',
      role: 'SUPER_ADMIN',
      phone: '+91 91112 43210',
      status: 'ACTIVE',
      lastLogin: 'Today, 10:45 AM',
      createdAt: '2025-01-01',
    },
    {
      id: 'usr-2',
      email: 'operations@aegisoverseas.com',
      name: 'Operations Manager',
      role: 'ADMIN',
      phone: '+91 98480 22334',
      status: 'ACTIVE',
      lastLogin: 'Yesterday, 06:12 PM',
      createdAt: '2025-02-10',
    },
    {
      id: 'usr-3',
      email: 'counselor@aegisoverseas.com',
      name: 'Pooja Sharma',
      role: 'COUNSELLOR',
      phone: '+91 92462 20044',
      status: 'ACTIVE',
      lastLogin: 'Today, 09:15 AM',
      createdAt: '2025-03-15',
    },
    {
      id: 'usr-4',
      email: 'content@aegisoverseas.com',
      name: 'Editorial Lead',
      role: 'CONTENT_MANAGER',
      phone: '+91 97033 22114',
      status: 'ACTIVE',
      lastLogin: 'Sep 6, 2026',
      createdAt: '2025-05-01',
    },
    {
      id: 'usr-5',
      email: 'documents@aegisoverseas.com',
      name: 'Visa Document Officer',
      role: 'DOCUMENT_MANAGER',
      phone: '+91 98855 44332',
      status: 'ACTIVE',
      lastLogin: 'Yesterday, 04:30 PM',
      createdAt: '2025-06-12',
    },
  ];

  findAll(): AdminUser[] {
    return this.users;
  }

  findById(id: string): AdminUser | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(dto: Partial<AdminUser>): AdminUser {
    const newUser: AdminUser = {
      id: 'usr-' + Date.now(),
      email: dto.email || '',
      name: dto.name || 'New Staff Member',
      role: dto.role || 'COUNSELLOR',
      phone: dto.phone || '',
      status: dto.status || 'ACTIVE',
      lastLogin: 'Never',
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, dto: Partial<AdminUser>): AdminUser | null {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx !== -1) {
      this.users[idx] = { ...this.users[idx], ...dto };
      return this.users[idx];
    }
    return null;
  }

  remove(id: string) {
    this.users = this.users.filter((u) => u.id !== id);
    return { success: true };
  }
}
