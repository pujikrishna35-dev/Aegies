import { apiClient } from './api';

export const enquiryService = {
  getAll: async () => apiClient('/enquirys'),
  getById: async (id: string) => apiClient(`/enquirys/${id}`),
  submit: async (data: any) => apiClient('/enquirys', { method: 'POST', body: JSON.stringify(data) }),
};
