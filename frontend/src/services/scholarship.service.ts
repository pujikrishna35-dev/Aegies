import { apiClient } from './api';

export const scholarshipService = {
  getAll: async () => apiClient('/scholarships'),
};
