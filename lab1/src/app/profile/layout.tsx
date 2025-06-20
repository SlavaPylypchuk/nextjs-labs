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
                    href='/profile/security'
                    className={clsx({ 'text-blue-500 font-bold': pathname === '/profile/security' })}
                >
                    Безпека
                </Link>
                <Link
                    href='/profile/settings'
                    className={clsx({ 'text-blue-500 font-bold': pathname === '/profile/settings' })}
                >
                    Налаштування
                </Link>
            </header>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <main>{children}</main>
        </div>
    )
}