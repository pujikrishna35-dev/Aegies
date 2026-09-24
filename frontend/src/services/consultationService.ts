import { apiClient } from './api';

export const consultationService = {
  getAll: async () => apiClient('/consultations'),
  getById: async (id: string) => apiClient(`/consultations/${id}`),
  submit: async (data: any) => apiClient('/consultations', { method: 'POST', body: JSON.stringify(data) }),
};
