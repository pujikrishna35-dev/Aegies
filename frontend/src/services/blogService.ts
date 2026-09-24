import { apiClient } from './api';

export const blogService = {
  getAll: async () => apiClient('/blogs'),
  getById: async (id: string) => apiClient(`/blogs/${id}`),
  submit: async (data: any) => apiClient('/blogs', { method: 'POST', body: JSON.stringify(data) }),
};
