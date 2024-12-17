import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full text-center p-4 bg-gray-800 text-white font-bold">
      <nav className="flex ">
        <Link className="w-1/4" href={'/'}>
          홈
        </Link>
        <Link className="w-1/4" href={'/champions'}>
          챔피언 목록
        </Link>
        <Link className="w-1/4" href={'/items'}>
          아이템 목록
        </Link>
        <Link className="w-1/4" href={'/rotation'}>
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
};

export default Header;
