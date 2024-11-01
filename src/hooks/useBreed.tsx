import React from "react";
import { CatData } from "../interfaces";

const useBreed = (data: CatData[]) => {
    const [selectedBreed, setSelectedBreed] = React.useState<null | string>(null);

    const handleBreedChange = (breed: string) => {
        setSelectedBreed(breed)
    }

    const uniqueBreeds = data?.reduce((acc: string[], cat) => {
        const breedName = cat.breeds[0]?.name;
        if (breedName && !acc.includes(breedName)) {
            acc.push(breedName);
        }
        return acc; 
    }, []) || [];
  
    const filteredCats = selectedBreed ? 
      data?.filter(cat => cat.breeds[0]?.name === selectedBreed) : 
      data;
  
    return { selectedBreed, handleBreedChange, filteredCats, uniqueBreeds };
}

export default useBreed