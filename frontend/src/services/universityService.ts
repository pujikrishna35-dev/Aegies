import { apiClient } from './api';

export const universityService = {
  getAll: async () => apiClient('/universitys'),
  getById: async (id: string) => apiClient(`/universitys/${id}`),
  submit: async (data: any) => apiClient('/universitys', { method: 'POST', body: JSON.stringify(data) }),
};
