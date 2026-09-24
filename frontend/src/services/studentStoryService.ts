import { apiClient } from './api';

export const studentStoryService = {
  getAll: async () => apiClient('/studentStorys'),
  getById: async (id: string) => apiClient(`/studentStorys/${id}`),
  submit: async (data: any) => apiClient('/studentStorys', { method: 'POST', body: JSON.stringify(data) }),
};
