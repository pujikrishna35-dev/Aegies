import React, { useState } from 'react';

export const Dropdown: React.FC<{ trigger: React.ReactNode; children: React.ReactNode }> = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div>{trigger}</div>
      {open && <div className="absolute top-full left-0 z-50 pt-2">{children}</div>}
    </div>
  );
};
