import { apiClient } from './api';

export const destinationService = {
  getAll: async () => apiClient('/destinations'),
  getBySlug: async (slug: string) => apiClient(`/destinations/${slug}`),
};
