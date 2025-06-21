// app/layout.tsx
'use client'

import './globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="uk">
        <body>
        <SessionProvider>
            {children}
        </SessionProvider>
        </body>
        </html>
    )
}
