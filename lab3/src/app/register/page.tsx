'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (res.ok) router.push('/login')
        else alert('Помилка при реєстрації')
    }

    return (
        <form onSubmit={handleRegister} className="max-w-sm mx-auto mt-10 space-y-4">
            <h1 className="text-2xl font-bold">Реєстрація</h1>
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
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                Зареєструватися
            </button>
        </form>
    )
}
