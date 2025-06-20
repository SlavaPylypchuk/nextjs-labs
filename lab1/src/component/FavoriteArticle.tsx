'use client'
import { useEffect, useState } from 'react'

interface Props {
    id: number
}

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export default function FavoriteArticle({ id }: Props) {
    const [data, setData] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then((post: Post) => {
                setData(post)
                setLoading(false)
            })
    }, [id])

    if (loading) return <p>Завантаження статті ID {id}...</p>
    if (!data) return <p>Помилка завантаження статті</p>
    return (
        <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
            <strong>Назва:{data.title}</strong>
            <p>Текст:{data.body}</p>
        </div>
    )
}
