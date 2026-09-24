import { apiClient } from './api';

export const universityService = {
  getAll: async (params?: { country?: string; search?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return apiClient(`/universities?${query}`);
  },
  getBySlug: async (slug: string) => apiClient(`/universities/${slug}`),
};
