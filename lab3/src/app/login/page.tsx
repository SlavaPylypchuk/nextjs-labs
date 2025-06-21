'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        })

        if (res?.ok) router.push('/')
        else alert('Невірні дані')
    }

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 space-y-4">
            <h1 className="text-2xl font-bold">Вхід</h1>
            <input
                type="email"
                placeholder="Email"
                required
                className="border p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                required
                className="border p-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Увійти
            </button>

            <button
                type="button"
                onClick={() => signIn('google')}
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
                Увійти через Google
            </button>
            <button
                type="button"
                onClick={() => signIn('github')}
                className="bg-gray-800 text-white px-4 py-2 rounded w-full"
            >
                Увійти через GitHub
            </button>

            <Link
                href="/register"
                className="block text-center text-blue-600 underline mt-4"
            >
                Немає акаунту? Зареєструватись
            </Link>
        </form>
    )
}
