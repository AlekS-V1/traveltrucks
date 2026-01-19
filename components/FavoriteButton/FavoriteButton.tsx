'use client';

import { useFavoriteCampers } from "@/store/campers";
import css from "./Favoritebutton.module.css";

interface FavoriteButtonProps {
    camperId: string;
}

export default function FavoriteButton({ camperId }: FavoriteButtonProps) {
    const toggleFavorite = useFavoriteCampers((state) => state.toggleFavorite);
    const isFavorite = useFavoriteCampers((state) => state.favoriteCampers.has(camperId));

    return (
        <div onClick={() => toggleFavorite(camperId)}
        aria-pressed={isFavorite}
        className={css.favoriteButton}>
            <svg width="24" height="24" className={css.iconHeart}>
                <use href={isFavorite ? '/sprite.svg#heart_filled' : '/sprite.svg#heart'} />
            </svg>
        </div>
    );
}