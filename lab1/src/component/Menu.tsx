'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/Menu.module.scss'

export default function Menu() {
    const pathname = usePathname()

    return (
        <nav className={styles.menu}>
            <Link href="/articles/create" className={pathname === '/articles/create' ? styles.active : ''}>
                Створення
            </Link>
            <Link href="/articles/favorite" className={pathname === '/articles/favorite' ? styles.active : ''}>
                Улюблене
            </Link>
        </nav>
    )
}
