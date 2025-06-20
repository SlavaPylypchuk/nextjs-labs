'use client'
import FavoriteArticle from '@/component/FavoriteArticle'

const favoriteIds = [1, 2, 3]

export default function FavoritePage() {
    return (
        <div>
            <h1>Улюблені статті</h1>
            {favoriteIds.map(id => (
                <FavoriteArticle key={id} id={id} />
            ))}
        </div>
    )
}
