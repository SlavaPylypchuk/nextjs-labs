import { PrismaClient } from '@/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.post.createMany({
        data: [
            { title: "Перший пост", content: "Привіт, світ!" },
            { title: "Другий пост", content: "Це база даних на Prisma" },
        ]
    })
    console.log("Seed виконано")
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect())