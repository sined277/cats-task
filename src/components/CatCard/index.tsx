// CatCard.tsx
import React from 'react';
import styles from './CatCard.module.scss';
import { CatData } from '../../interfaces';

export interface CatCardProps {
    cat: CatData; 
    onToggleFavorite: (id: string) => void; 
}

const CatCard: React.FC<CatCardProps> = ({ cat, onToggleFavorite }) => {
    
    return (
        <div className={styles.card}>
            <img src={cat.url} alt="Cat" className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.breedName}>
                    {cat.breeds[0]?.name || "Unknown Breed"}
                </h3>
                <button 
                    className={`${styles.favoriteButton} ${cat.isFavorite ? styles.favorited : ''}`}
                    onClick={() => onToggleFavorite(cat.id)}
                >
                    {cat.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
            </div>
        </div>
    );
};

export default CatCard;
