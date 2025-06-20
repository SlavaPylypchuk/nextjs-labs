'use client'
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname()
  return (
    <html lang="UA-uk">
      <body>
      <header>
          <Link
              href='/articles'
              className={clsx({ 'text-blue-500 font-bold': pathname === '/articles' })}
          >
              Артиклі
          </Link>
          <Link
              href='/profile/settings'
              className={clsx({ 'text-blue-500 font-bold': pathname === '/profile/settings' })}
          >
              Налаштування
          </Link>
          <Link
              href='/profile/security'
              className={clsx({ 'text-blue-500 font-bold': pathname === '/profile/security' })}
          >
              Безпека
          </Link>
      </header>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
