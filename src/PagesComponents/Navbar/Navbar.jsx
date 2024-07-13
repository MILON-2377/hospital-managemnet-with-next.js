"use client";

import { useAuth } from '@/AuthProviderContext/AuthProviderContext';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  const {userLoggedOut} = useAuth();

  // user logging out handle
  const loggedOut = () => {
    userLoggedOut();
  }

  return (
    <div>
      <Link href="/">Home</Link>

      <button onClick={loggedOut} className='btn'>Log Out</button>
    </div>
  )
}
