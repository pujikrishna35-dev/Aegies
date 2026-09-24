import { apiClient } from './api';

export const testimonialService = {
  getAll: async () => apiClient('/testimonials'),
  getById: async (id: string) => apiClient(`/testimonials/${id}`),
  submit: async (data: any) => apiClient('/testimonials', { method: 'POST', body: JSON.stringify(data) }),
};
