import { login } from './auth';

const breedMapping = {
    "LABRADOR_RETRIEVER": "Labrador Retriever",
    "GERMAN_SHEPHERD": "Owczarek niemiecki",
    "GOLDEN_RETRIEVER": "Golden retriever",
    "FRENCH_BULLDOG": "Buldog francuski",
    "BULLDOG": "Bulldog",
    "POODLE": "Pudel duży",
    "BEAGLE": "Beagle",
    "ROTTWEILER": "Rottweiler",
    "DACHSHUND": "Jamnik",
    "PEMBROKE_WELSH_CORGI": "Welsh Corgi Pembroke",
    "SIBERIAN_HUSKY": "Husky syberyjski",
    "GREAT_DANE": "Dog niemiecki",
    "DOBERMAN_PINSCHER": "Doberman",
    "AUSTRALIAN_SHEPHERD": "Owczarek australijski",
    "SHIH_TZU": "Shih tzu",
    "MINIATURE_SCHNAUZER": "Sznaucer miniaturowy",
    "CAVALIER_KING_CHARLES_SPANIEL": "Cavalier king charles spaniel",
};

export const fetchDogs = async () => {
    try {
        const userData = await login();
        const token = userData.token;

        const response = await fetch("https://e-dog.onrender.com/api/v1/dogs/detailed", {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const mappedData = data.map(dog => {
            const breedPolish = breedMapping[dog.breed] || dog.breed;
            return {
                ...dog,
                breed_pl: breedPolish
            };
        });

        return mappedData;
    } catch (error) {
        console.error("Error fetching dogs:", error);
        throw error;
    }
};
