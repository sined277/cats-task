import React from "react";
import CatCard from "../CatCard";
import styles from "./CatComponent.module.scss";
import { useFetch } from "../../hooks/useFetch";
import useBreed from "../../hooks/useBreed";
import BreedFilter from "../BreedFilter";

const CatComponent: React.FC = () => {
  const { data, loadingStatus, error, onToggleFavorite } = useFetch();
  const { selectedBreed, handleBreedChange, filteredCats, uniqueBreeds } = useBreed(data);
  const [showFavorites, setShowFavorites] = React.useState<boolean>(false);
  const displayedCats = showFavorites ? data.filter((cat) => cat.isFavorite === true) : filteredCats

  return (
    <div className={styles.container}>
      <BreedFilter 
        breeds={uniqueBreeds} 
        selectedBreed={selectedBreed} 
        onBreedChange={handleBreedChange} 
      />
      <button className={styles.toggleFavorites} onClick={() => setShowFavorites(!showFavorites)}>{showFavorites ? "Hide Favorites" : "Show Favorites"}</button>
      {loadingStatus && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      {filteredCats && (
        <div className={styles.dataContainer}>
          {displayedCats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { CatComponent };
