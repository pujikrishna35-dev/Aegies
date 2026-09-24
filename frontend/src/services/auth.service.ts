import { apiClient } from './api';

export const authService = {
  login: async (credentials: any) => apiClient('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: async (data: any) => apiClient('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
};
