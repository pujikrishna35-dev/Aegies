import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('aegis_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
        setIsAuthenticated(true);
      } catch (e) {
        localStorage.removeItem('aegis_user');
      }
    }
  }, []);

  return { user, isAuthenticated };
};
