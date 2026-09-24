import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthToken } from '../../services/adminApi';

interface Props {
  children: React.ReactNode;
}

export const AdminAuthGuard: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const token = getAuthToken();

  if (!token) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminAuthGuard;
