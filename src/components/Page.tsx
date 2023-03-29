import React from 'react'
import { Header } from '@components/Header';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
}

export function Page({ children }: Props) {
  const router = useRouter();
  const { user } = useUser();

  // if (!user) router.push('/api/auth/login')

  return (
    <div className="w-full h-full min-h-screen bg-gray-900">
      <Header />
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  )
}
