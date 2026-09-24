import { apiClient } from './api';

export const courseService = {
  getAll: async () => apiClient('/courses'),
  getById: async (id: string) => apiClient(`/courses/${id}`),
  submit: async (data: any) => apiClient('/courses', { method: 'POST', body: JSON.stringify(data) }),
};
