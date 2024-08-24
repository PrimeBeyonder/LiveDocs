import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const Header = ({children, className} : HeaderProps) => {
  return (
    <div className={cn("header" , className)}>
      <Link href='/' className='md:flex-1'>
         <Image
         src='/assets/icons/logo.svg'
         alt='Logo with Name'
         width={120}
         height={32}
         className='hidden md:block'
         />
         <Image
         src='/assets/icons/logo-icon.svg'
         alt='Logo'
         width={32}
         height={32}
         className='md:hidden block'
         />
      </Link>
      {children}
    </div>
  )
}

export default Header
