import { apiClient } from './api';

export const destinationService = {
  getAll: async () => apiClient('/destinations'),
  getById: async (id: string) => apiClient(`/destinations/${id}`),
  submit: async (data: any) => apiClient('/destinations', { method: 'POST', body: JSON.stringify(data) }),
};
