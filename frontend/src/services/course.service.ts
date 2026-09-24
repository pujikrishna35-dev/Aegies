import { apiClient } from './api';

export const courseService = {
  getAll: async () => apiClient('/courses'),
};
