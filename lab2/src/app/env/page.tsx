'use client'

export default function Page() {
    console.log('NEXT_PUBLIC_API_URL (Browser):', process.env.NEXT_PUBLIC_API_URL)

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Змінні середовища</h1>

            <p><strong>APP_NAME:</strong> {process.env.NEXT_PUBLIC_APP_NAME || '–'}</p>
            <p><strong>NEXT_PUBLIC_API_URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</p>
            <p><strong>SECRET_API_KEY:</strong> {process.env.SECRET_API_KEY}</p>
        </div>
    )
}
