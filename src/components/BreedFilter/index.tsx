import React from 'react';
import styles from './BreedFilter.module.scss';

interface BreedFilterProps {
    breeds: string[];
    selectedBreed: string;
    onBreedChange: (breed: string) => void;
}

const BreedFilter: React.FC<BreedFilterProps> = ({ breeds, selectedBreed, onBreedChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>Filter by breed:</label>
            <select
                value={selectedBreed}
                onChange={(e) => onBreedChange(e.target.value)}
                className={styles.select}
            >
                <option value="">All breeds</option>
                {breeds.map((breed, index) => (
                    <option key={index} value={breed}>
                        {breed}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BreedFilter;
