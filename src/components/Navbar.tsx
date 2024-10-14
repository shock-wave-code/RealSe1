'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className='fixed flex items-center justify-center top-2 z-50 w-screen px-4'>
        <div className="container flex items-center justify-between rounded-lg bg-black py-3">
            <div className='flex flex-shrink-0 items-center justify-between'>
                <Image className='mr-2' src="/logo.png" width={60} height={30} alt="Logo"/>
                <span className='text-sm tracking-tight text-white'>RealES</span>
            </div>
            <div className='hidden lg:flex'>
                <ul className='flex items-center gap-4'>
                    {NAV_LINKS.map((item, index)=> (
                        <li key={index}>
                            <Link className='text-sm text-white hover:text-neutral-500' href={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-sm text-white lg:flex'>
                <Button variant='outline' className='mr-2 bg-black'>Sign In</Button>
                <Button className='bg-slate-800'>Sing Up</Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar