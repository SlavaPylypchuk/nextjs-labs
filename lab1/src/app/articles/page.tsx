'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

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
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Сторінка артиклю</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {posts.slice(0, 10).map(post => (
                    <Card key={post.id} sx={{ minHeight: 150 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.body}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
