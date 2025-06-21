import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const body = await req.json()
    const updated = await prisma.post.update({
        where: { id: Number(params.id) },
        data: {
            title: body.title,
            content: body.content,
        },
    })
    return NextResponse.json(updated)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
    await prisma.post.delete({
        where: { id: Number(params.id) },
    })
    return NextResponse.json({ message: 'Пост видалено' })
}