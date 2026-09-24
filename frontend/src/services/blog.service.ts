import { apiClient } from './api';

export const blogService = {
  getAll: async () => apiClient('/blog'),
};
