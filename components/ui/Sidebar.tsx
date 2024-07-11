'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const SideBar = ({user}:SiderbarProps)=>{
    const pathname = usePathname();
   // const isActive = pathname === item.route 
    return(
      <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                <Image src="/icons/logo.svg" width={35} height={35} alt="Horizon logo" className="size-[24px] max-xl:size-14"/>
                <h1 className="sizebar-logo text-blue-600 font-bold">LEO BANK</h1>
            </Link>    

        </nav> 
        {
            sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                return(
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                            <div className="relative size-6">
                                <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})} />
                            </div>
                            <h1 className={cn('sidebar-label', {'!text-white': isActive})}>{item.label}</h1>
                    </Link>
                )
            })
        }
      </section>
    )
}

export default SideBar;