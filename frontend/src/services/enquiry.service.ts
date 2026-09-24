import { apiClient } from './api';

export const enquiryService = {
  submit: async (data: any) => apiClient('/leads', { method: 'POST', body: JSON.stringify(data) }),
};
