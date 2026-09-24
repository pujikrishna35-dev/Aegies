import { apiClient } from './api';

export const scholarshipService = {
  getAll: async () => apiClient('/scholarships'),
  getById: async (id: string) => apiClient(`/scholarships/${id}`),
  submit: async (data: any) => apiClient('/scholarships', { method: 'POST', body: JSON.stringify(data) }),
};
