'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const createPost = async () => {
    setLoading(true)
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Фронтенд Пост',
        content: 'Це пост створено з Home сторінки.',
      }),
    })
    fetchPosts()
  }

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
      <div className="p-4">
        <main>
          <h1 className="text-xl font-bold mb-4">Головна сторінка</h1>

          <button
              onClick={createPost}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
          >
            Створити пост
          </button>

          {loading ? (
              <p>Завантаження...</p>
          ) : (
              <ul className="space-y-2">
                {posts.map((post) => (
                    <li key={post.id} className="border p-3 rounded bg-gray-50">
                      <h3 className="font-semibold text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-700">{post.content}</p>
                    </li>
                ))}
              </ul>
          )}
        </main>
      </div>
  )
}
