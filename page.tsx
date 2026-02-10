'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { useUserStore } from '@/store/userStore'
import AuthScreen from '@/components/auth/AuthScreen'
import MainApp from '@/components/MainApp'

export default function Home() {
  useAuth()
  const { user, isLoading } = useUserStore()

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    )
  }

  return user ? <MainApp /> : <AuthScreen />
}
