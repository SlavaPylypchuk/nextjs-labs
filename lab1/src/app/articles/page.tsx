'use client'
import { useEffect, useState } from 'react'

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export default function Page() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setPosts(data)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    if (loading) {
        return <p>Завантаження...</p>
    }

    return (
        <div>
            <h1>Сторінка артиклю</h1>
            <ul>
                {posts.slice(0, 10).map(post => (
                    <li key={post.id} style={{ marginBottom: '1rem', border: '1px solid gray', padding: '10px'}}>
                        <strong>Назва: {post.title}</strong>
                        <p>Текст: {post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}