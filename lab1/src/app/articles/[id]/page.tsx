export interface PagePromise {
    params: Promise<{ id: string }>
}

interface Comments {
    id: number
    name: string
    body: string
}

export const dynamicParams = false

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
    }))
}

export default async function Page({ params }: PagePromise) {
    const resolvedParams = await params
    const { id } = resolvedParams

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'force-cache',
    })
    const post = await postRes.json()

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        cache: 'force-cache',
    })
    const comments = await commentsRes.json()

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <h2>Коментарі</h2>
            <ul>
                {comments.map((c: Comments) => (
                    <li key={c.id}>
                        <strong style={{ color: 'blue' }}>{c.name}</strong>: {c.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}
