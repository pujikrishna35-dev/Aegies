import { apiClient } from './api';

export const consultationService = {
  book: async (data: any) => apiClient('/consultations', { method: 'POST', body: JSON.stringify(data) }),
};
