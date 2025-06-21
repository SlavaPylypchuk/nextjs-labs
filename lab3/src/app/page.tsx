'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
      <div className="p-4">
        {session ? (
            <div className="flex items-center space-x-4">
              <p>Вітаю, {session.user?.email}</p>
              <button
                  onClick={() => signOut()}
                  className="text-red-600 hover:underline"
              >
                Вийти
              </button>
            </div>
        ) : (
            <Link href="/login" className="text-blue-600 hover:underline">
              Увійти
            </Link>
        )}
      </div>
  )
}
