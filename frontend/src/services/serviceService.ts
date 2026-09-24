import { apiClient } from './api';

export const serviceService = {
  getAll: async () => apiClient('/services'),
  getById: async (id: string) => apiClient(`/services/${id}`),
  submit: async (data: any) => apiClient('/services', { method: 'POST', body: JSON.stringify(data) }),
};
