'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div>
            <header>
                <Link
                    href="/articles/create"
                    className={clsx({ 'text-blue-500 font-bold': pathname === '/articles/create' })}
                >
                    Створення
                </Link>
                <Link
                    href="/articles/favorite"
                    className={clsx({ 'text-blue-500 font-bold': pathname === '/articles/favorite' })}
                >
                    Улюблене
                </Link>
            </header>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <main>{children}</main>
        </div>
    )
}