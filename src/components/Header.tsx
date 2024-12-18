'use client';

import Image from 'next/image';
import React from 'react';
import Navigation from './Navigation';
import useModalStore from '@/stores/useModalStore';

const Header = () => {
  const { isOpen, openModal, closeModal } = useModalStore();
  return (
    <header className="fixed top-0 w-full p-4 bg-gray-800 text-white font-bold">
      {!isOpen && (
        <button className="sm:hidden ml-auto" onClick={openModal}>
          <Image src={'/menu-btn.png'} width={30} height={30} alt="menu button" />
        </button>
      )}
      {isOpen && (
        <button className="sm:hidden ml-auto" onClick={closeModal}>
          <p>x</p>
        </button>
      )}
      <div className="hidden sm:flex">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
