import { useAuth } from '@/AuthProviderContext/AuthProviderContext'
import React from 'react'
import Loader from '../Loader/Loader';

export default function Home() {
    const {user, loading} = useAuth();

    if(loading) return <Loader></Loader>
  return (
    <div>
      <h1>hello from home page</h1>
    </div>
  )
}
