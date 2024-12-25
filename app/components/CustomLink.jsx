'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({ path, children }) => {
  const pathName = usePathname();
  const active = pathName === path;
  return (
    <Link
      href={path}
      className={active ? 'text-orange-500' : ''}>
      {children}
    </Link>
  );
};

export default CustomLink;
