import { apiClient } from './api';

export const applicationService = {
  getAll: async () => apiClient('/applications'),
  getById: async (id: string) => apiClient(`/applications/${id}`),
  submit: async (data: any) => apiClient('/applications', { method: 'POST', body: JSON.stringify(data) }),
};
