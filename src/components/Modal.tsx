'use client'

import React from 'react';
import Navigation from './Navigation';
import useModalStore from '@/stores/useModalStore';

const Modal = () => {
  const { isOpen } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="sm:hidden w-full h-full fixed top-14 left-0 bg-black">
      <div className="mt-14">
        <Navigation />
      </div>
    </div>
  );
};

export default Modal;
