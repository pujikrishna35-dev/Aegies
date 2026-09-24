import { Injectable, UnauthorizedException } from '@nestjs/common';

export interface AdminUserRecord {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'COUNSELLOR' | 'CONTENT_MANAGER' | 'DOCUMENT_MANAGER' | 'STUDENT';
  phone?: string;
  avatar?: string;
}

const DEMO_USERS: Record<string, { pass: string; user: AdminUserRecord }> = {
  'admin@aegisoverseas.com': {
    pass: 'Admin@123',
    user: {
      id: 'admin-1',
      email: 'admin@aegisoverseas.com',
      name: 'Aegis Super Admin',
      role: 'SUPER_ADMIN',
      phone: '+91 91112 43210'
    }
  },
  'operations@aegisoverseas.com': {
    pass: 'Admin@123',
    user: {
      id: 'admin-2',
      email: 'operations@aegisoverseas.com',
      name: 'Operations Manager',
      role: 'ADMIN',
      phone: '+91 98480 22334'
    }
  },
  'counselor@aegisoverseas.com': {
    pass: 'Admin@123',
    user: {
      id: 'admin-3',
      email: 'counselor@aegisoverseas.com',
      name: 'Pooja Sharma (Senior Counselor)',
      role: 'COUNSELLOR',
      phone: '+91 92462 20044'
    }
  },
  'content@aegisoverseas.com': {
    pass: 'Admin@123',
    user: {
      id: 'admin-4',
      email: 'content@aegisoverseas.com',
      name: 'Editorial Lead',
      role: 'CONTENT_MANAGER',
      phone: '+91 97033 22114'
    }
  },
  'documents@aegisoverseas.com': {
    pass: 'Admin@123',
    user: {
      id: 'admin-5',
      email: 'documents@aegisoverseas.com',
      name: 'Visa Document Officer',
      role: 'DOCUMENT_MANAGER',
      phone: '+91 98855 44332'
    }
  }
};

@Injectable()
export class AuthService {
  async validateUser(email: string, pass: string): Promise<AdminUserRecord | null> {
    const match = DEMO_USERS[email.trim().toLowerCase()];
    if (match && match.pass === pass) {
      return match.user;
    }
    return null;
  }

  async login(user: AdminUserRecord) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      accessToken: 'aegis_jwt_' + Buffer.from(JSON.stringify(payload)).toString('base64'),
      user,
      expiresIn: 86400,
    };
  }

  async register(data: any) {
    return {
      message: 'User registered successfully',
      user: {
        id: 'usr-' + Date.now(),
        email: data.email,
        name: data.name,
        role: data.role || 'STUDENT',
      },
    };
  }

  async getProfile(token: string): Promise<AdminUserRecord | null> {
    try {
      if (token && token.startsWith('aegis_jwt_')) {
        const decoded = JSON.parse(Buffer.from(token.replace('aegis_jwt_', ''), 'base64').toString('utf-8'));
        const found = Object.values(DEMO_USERS).find(u => u.user.email === decoded.email);
        return found ? found.user : null;
      }
    } catch {
      // ignore
    }
    return DEMO_USERS['admin@aegisoverseas.com'].user;
  }
}
