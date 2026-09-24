import React from 'react';

export const Notifications: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor notifications operations in real time.</p>
        </div>
        <button className="px-4 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition" style={{ backgroundColor: '#8A1538' }}>
          + Add New
        </button>
      </div>
      
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="text-center py-12 text-slate-400">
          <p className="text-lg font-medium text-slate-700">Notifications Records</p>
          <p className="text-sm mt-1">Live data ready.</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
