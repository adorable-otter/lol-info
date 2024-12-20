'use client';

import Image from 'next/image';
import Navigation from './Navigation';
import useModalStore from '@/stores/useModalStore';
import { useTheme } from 'next-themes';

const Header = () => {
  const { isOpen, openModal, closeModal } = useModalStore();
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 w-full p-4 bg-gray-800 text-white font-bold flex">
      {!isOpen && (
        <button className="sm:hidden" onClick={openModal}>
          <Image src={'/menu-btn.png'} width={30} height={30} alt="menu button" className='bg-gray-800'/>
        </button>
      )}
      {isOpen && (
        <button className="sm:hidden" onClick={closeModal}>
          <p>x</p>
        </button>
      )}
      <div className="hidden sm:flex w-4/5">
        <Navigation />
      </div>
      <button
        className="ml-auto mr-5"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        {/* 맨 앞 글자만 대문자로 변경 */}
        {theme && theme[0].toUpperCase() + theme.slice(1)}
      </button>
    </header>
  );
};

export default Header;
