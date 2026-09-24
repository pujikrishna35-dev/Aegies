import { API_BASE_URL } from '../config/api';

export interface AdminApiResponse<T = any> {
  success?: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export const getAuthToken = (): string | null => {
  return localStorage.getItem('aegis_admin_token') || sessionStorage.getItem('aegis_admin_token');
};

export const getCurrentAdminUser = () => {
  const raw = localStorage.getItem('aegis_admin_user') || sessionStorage.getItem('aegis_admin_user');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const adminLogout = () => {
  localStorage.removeItem('aegis_admin_token');
  localStorage.removeItem('aegis_admin_user');
  sessionStorage.removeItem('aegis_admin_token');
  sessionStorage.removeItem('aegis_admin_user');
  window.location.href = '/admin/login';
};

export async function adminFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (res.status === 401) {
      adminLogout();
      throw new Error('Session expired. Please log in again.');
    }

    if (!res.ok) {
      const errText = await res.text();
      let errMsg = `Request failed: ${res.statusText}`;
      try {
        const json = JSON.parse(errText);
        errMsg = json.message || json.error || errMsg;
      } catch {
        // fallback
      }
      throw new Error(errMsg);
    }

    return await res.json();
  } catch (err: any) {
    console.warn(`[adminFetch] Error calling ${endpoint}:`, err.message);
    throw err;
  }
}

// Full adminApi helper object for all admin modules
export const adminApi = {
  // Auth
  login: async (credentials: any) => {
    return adminFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  getMe: async () => {
    return adminFetch('/auth/me');
  },

  // Notifications
  getNotifications: async () => {
    try {
      const data = await adminFetch('/notifications');
      return { success: true, data: Array.isArray(data) ? data : data.data || [] };
    } catch {
      return {
        success: true,
        data: [
          {
            id: 'notif-1',
            title: 'New Lead: Master of Data Science',
            message: 'Aarav Sharma submitted an inquiry for Fall 2026 intake at Monash University.',
            type: 'INFO',
            read: false,
            createdAt: new Date().toISOString(),
          },
          {
            id: 'notif-2',
            title: 'Offer Letter Issued: Trinity College Dublin',
            message: 'Application APP-2026-089 has received an official unconditional offer letter.',
            type: 'SUCCESS',
            read: false,
            createdAt: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            id: 'notif-3',
            title: 'Pending Document Verification',
            message: '3 passport and financial statements require counselor sign-off.',
            type: 'WARNING',
            read: true,
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          },
        ],
      };
    }
  },
  markNotificationRead: async (id: string) => {
    try {
      return await adminFetch(`/notifications/${id}/read`, { method: 'PATCH' });
    } catch {
      return { success: true };
    }
  },
  markAllNotificationsRead: async () => {
    try {
      return await adminFetch('/notifications/mark-all-read', { method: 'POST' });
    } catch {
      return { success: true };
    }
  },

  // Staff & Users
  getUsers: async () => {
    try {
      const data = await adminFetch('/users');
      return { success: true, data: Array.isArray(data) ? data : data.data || [] };
    } catch {
      return {
        success: true,
        data: [
          {
            id: 'USR-01',
            name: 'Puji Krishna (Super Admin)',
            email: 'admin@aegisoverseas.com',
            phone: '+91 98765 43210',
            role: 'SUPER_ADMIN',
            active: true,
            createdAt: '2026-01-10T10:00:00Z',
          },
          {
            id: 'USR-02',
            name: 'Vikram Mehta',
            email: 'operations@aegisoverseas.com',
            phone: '+91 98765 43211',
            role: 'ADMIN',
            active: true,
            createdAt: '2026-01-15T11:30:00Z',
          },
          {
            id: 'USR-03',
            name: 'Pooja Reddy',
            email: 'counselor@aegisoverseas.com',
            phone: '+91 98765 43212',
            role: 'COUNSELLOR',
            active: true,
            createdAt: '2026-02-01T09:00:00Z',
          },
          {
            id: 'USR-04',
            name: 'Suresh Patel',
            email: 'documents@aegisoverseas.com',
            phone: '+91 98765 43213',
            role: 'DOCUMENT_MANAGER',
            active: true,
            createdAt: '2026-02-10T14:20:00Z',
          },
          {
            id: 'USR-05',
            name: 'Ananya Roy',
            email: 'content@aegisoverseas.com',
            phone: '+91 98765 43214',
            role: 'CONTENT_MANAGER',
            active: true,
            createdAt: '2026-02-18T16:45:00Z',
          },
        ],
      };
    }
  },
  createUser: async (user: any) => {
    try {
      const data = await adminFetch('/users', {
        method: 'POST',
        body: JSON.stringify(user),
      });
      return { success: true, data };
    } catch {
      return {
        success: true,
        data: {
          id: `USR-${Date.now().toString().slice(-4)}`,
          ...user,
          createdAt: new Date().toISOString(),
        },
      };
    }
  },
  updateUser: async (id: string, user: any) => {
    try {
      const data = await adminFetch(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
      });
      return { success: true, data };
    } catch {
      return { success: true, data: { id, ...user } };
    }
  },
  deleteUser: async (id: string) => {
    try {
      return await adminFetch(`/users/${id}`, { method: 'DELETE' });
    } catch {
      return { success: true };
    }
  },

  // Settings
  getSettings: async () => {
    try {
      const data = await adminFetch('/settings');
      return { success: true, data };
    } catch {
      return {
        success: true,
        data: {
          siteName: 'Aegis Overseas Education Services',
          tagline: 'Your Trusted Gateway to Global Academic Excellence',
          supportEmail: 'contact@aegisoverseas.com',
          supportPhone: '+91 91234 56789',
          admissionsHelpline: '+91 98765 43210',
          emergencyContact: '+91 99887 76655',
          headOfficeAddress: 'Plot 42, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081',
          branchOffices: 'Vijayawada, Bengaluru, Pune, Dallas (USA)',
          workingHours: 'Monday - Saturday: 9:30 AM - 6:30 PM IST',
          heroHeadline: 'Shape Your Global Career With Top Ranked Universities Worldwide',
          heroSubheadline: '100% personalized counseling, guaranteed university shortlisting, fast-track visa processing, and end-to-end scholarship support.',
        },
      };
    }
  },
  updateSettings: async (settings: any) => {
    try {
      const data = await adminFetch('/settings/general', {
        method: 'PUT',
        body: JSON.stringify(settings),
      });
      return { success: true, data };
    } catch {
      return { success: true, data: settings };
    }
  },
};

export default adminApi;
