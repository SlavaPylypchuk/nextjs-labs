import { render, screen, fireEvent } from '@testing-library/react'
import RegisterPage from '@/app/register/page'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({ push: jest.fn() })),
}))

describe('RegisterPage', () => {
    it('рендерить форму реєстрації', () => {
        render(<RegisterPage />)
        expect(screen.getByText(/Реєстрація/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    })

    it('відправляє дані при сабміті', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({ ok: true })
        ) as jest.Mock

        render(<RegisterPage />)

        fireEvent.change(screen.getByPlaceholderText(/Email/i), {
            target: { value: 'test@example.com' },
        })
        fireEvent.change(screen.getByPlaceholderText(/Пароль/i), {
            target: { value: 'password123' },
        })
        fireEvent.click(screen.getByText(/Зареєструватися/i))

        expect(global.fetch).toHaveBeenCalled()
    })
})