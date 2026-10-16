'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hideHeader?: boolean;
}

export function Modal({ isOpen, onClose, title, children, maxWidth = 'lg', hideHeader = false }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const widthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center sm:p-4 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div
        className={`relative z-10 w-full ${widthClasses[maxWidth]} max-h-[92dvh] sm:max-h-[90vh] flex flex-col overflow-hidden rounded-t-[28px] sm:rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between border-b border-neutral-100 px-5 sm:px-6 py-3 sm:py-4 bg-ivory-50 shrink-0">
            {title ? (
              <h3 className="font-display text-base sm:text-xl font-bold text-navy-950 pr-3">{title}</h3>
            ) : (
              <div />
            )}
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-navy-900 transition-colors shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`${hideHeader ? 'p-0' : 'p-4 sm:p-6'} overflow-y-auto flex-1 overscroll-contain`}>
          {children}
        </div>
      </div>
    </div>
  );
}
