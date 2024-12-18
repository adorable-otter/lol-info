'use client';

import React from 'react';
import Link from 'next/link';
import useModalStore from '@/stores/useModalStore';

const Navigation = () => {
  const { closeModal } = useModalStore();

  const handleLinkClick = () => {
    closeModal();
  };
  return (
    <nav className="flex flex-col sm:flex-row items-center gap-5 text-center w-full">
      <Link onClick={handleLinkClick} className="w-full sm:w-1/4" href={'/'}>
        홈
      </Link>
      <Link onClick={handleLinkClick} className="w-full sm:w-1/4" href={'/champions'}>
        챔피언 목록
      </Link>
      <Link onClick={handleLinkClick} className="w-full sm:w-1/4" href={'/items'}>
        아이템 목록
      </Link>
      <Link onClick={handleLinkClick} className="w-full sm:w-1/4" href={'/rotation'}>
        챔피언 로테이션
      </Link>
    </nav>
  );
};

export default Navigation;
