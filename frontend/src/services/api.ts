import { API_BASE_URL } from '../config/api';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  if (!API_BASE_URL) {
    // Standalone client-side mode (no separate API backend running on dev server)
    if (options.method && options.method.toUpperCase() !== 'GET') {
      try {
        const payload = options.body ? JSON.parse(options.body as string) : {};
        const key = `aegis_offline_${endpoint.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ ...payload, id: `offline_${Date.now()}`, createdAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {
        // local storage fallback
      }
      return { success: true, message: 'Submitted successfully' };
    }
    return [];
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};
