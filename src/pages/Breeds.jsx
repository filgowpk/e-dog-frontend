import React, { useState, useEffect } from 'react';
import { fetchDogs } from '../api/dogApi';
import { Characteristic } from '../api/Characteristic.js';
import { FaDog, FaPaw, FaBone, FaHeart, FaSearch } from 'react-icons/fa';
import './Breeds.css';
import Loader from '../components/Loader.jsx'

function Breeds() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [breeds, setBreeds] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState([]);
  const [characteristicsFilter, setCharacteristicsFilter] = useState([]);
  const [showAllCharacteristics, setShowAllCharacteristics] = useState(false);


  useEffect(() => {
    const loadDogs = async () => {
      try {
        const data = await fetchDogs(); 
        setBreeds(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDogs();
  }, []);

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className='error'>
              Skontaktuj się z administratorem. 
              <br />Email: edog@gmail.com
              <br />Telefon: 123 123 123
            </div>;
  }

  const filteredByName = breeds.filter(breed => 
    breed.breed_pl.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleShowAllCharacteristics = () => {
    setShowAllCharacteristics((prev) => !prev);
  };
  
  const filteredBySize = filteredByName.filter(breed => {
    const height = breed.height;

    if (sizeFilter.length === 0) {
      return true;
    }

    if (sizeFilter.includes('small') && height <= 40) {
      return true;
    } else if (sizeFilter.includes('medium') && height > 40 && height <= 60) {
      return true;
    } else if (sizeFilter.includes('large') && height > 60) {
      return true;
    }

    return false;
  });

  const handleCharacteristicsChange = (e) => {
    const value = e.target.name;
    setCharacteristicsFilter((prevState) =>
        prevState.includes(value)
            ? prevState.filter((item) => item !== value)
            : [...prevState, value]
    );
  };

  const filteredByCharacteristics = filteredBySize.filter((breed) => {
      if (characteristicsFilter.length === 0) return true;
      return characteristicsFilter.every((charKey) =>
          breed.characteristics.includes(charKey)
      );
  });

  const finalFilteredBreeds = filteredByCharacteristics;

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const handleSizeChange = (size) => {
    if (sizeFilter.includes(size)) {
      setSizeFilter(sizeFilter.filter(item => item !== size));
    } else {
      setSizeFilter([...sizeFilter, size]);
    }
  };

  return (
    <div className="breeds-container">
      <div className='breeds-group'>
        <div className='breeds-name'>
          <h2>Filtry</h2>
        </div>

        <aside className="breeds-filters">
          <div className='filter-group'>
            <h3>Szukaj po nazwie</h3>
            <div className='search-wrapper'>
              <FaSearch id='search-icon' />
              <input
                type="text"
                id="search-name"
                placeholder="Wpisz nazwę rasy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-group">
            <h3>Wielkość</h3>
            <label>
              <input 
                type="checkbox" 
                name="size" 
                value="small" 
                checked={sizeFilter.includes('small')} 
                onChange={() => handleSizeChange('small')}
              />
              Rasy małe
            </label>
            <label>
              <input 
                type="checkbox" 
                name="size" 
                value="medium" 
                checked={sizeFilter.includes('medium')} 
                onChange={() => handleSizeChange('medium')}
              />
              Rasy średnie
            </label>
            <label>
              <input 
                type="checkbox" 
                name="size" 
                value="large" 
                checked={sizeFilter.includes('large')} 
                onChange={() => handleSizeChange('large')}
              />
              Rasy duże
            </label>
          </div>

          <div className="checkbox-group">
              <h3>Charakter</h3>
              {showAllCharacteristics
                  ? Object.keys(Characteristic).map((char, index) => (
                      <label key={index}>
                          <input
                              type="checkbox"
                              name={Characteristic[char].key}
                              checked={characteristicsFilter.includes(Characteristic[char].key)}
                              onChange={handleCharacteristicsChange}
                          />
                          {Characteristic[char].label}
                      </label>
                  ))
                  : Object.keys(Characteristic).slice(0, 3).map((char, index) => (
                      <label key={index}>
                          <input
                              type="checkbox"
                              name={Characteristic[char].key}
                              checked={characteristicsFilter.includes(Characteristic[char].key)}
                              onChange={handleCharacteristicsChange}
                          />
                          {Characteristic[char].label}
                      </label>
                  ))}
            </div>
          <a
            href="#"
            className="more-filters"
            onClick={(e) => {
              e.preventDefault();
              toggleShowAllCharacteristics();
            }}
          >
            {showAllCharacteristics ? "Pokaż mniej filtrów" : "Pokaż więcej filtrów"}
          </a>

        </aside>
      </div>

      <main className="breeds-main">
        <div className="popular-filters">
          <h2>Popularne filtry</h2>
          <div className="filter-buttons">
            <button onClick={() => handleSizeChange('small')}>
              <FaDog size={30} /> Rasy małe
            </button>
            <button onClick={() => handleSizeChange('medium')}>
              <FaPaw size={30} /> Rasy średnie
            </button>
            <button onClick={() => handleSizeChange('large')}>
              <FaBone size={30} /> Rasy duże
            </button>
            <button onClick={() => setSizeFilter([])}>
              <FaHeart size={30} /> Wyczyść rozmiar
            </button>
          </div>
        </div>

        <div className="selected-filters">
          {selectedFilters.map((filter, index) => (
            <span key={index} className="filter-tag">
              {filter} <button onClick={() => toggleFilter(filter)}>X</button>
            </span>
          ))}
        </div>

        <div className="breeds-cards">
          {finalFilteredBreeds.map((breed, index) => (
            <div className="breed-card" key={index}>
              <img
                src={breed.imageUrl}
                alt={breed.breed}
                className="breed-card-image"
              />
              <h3>{breed.breed_pl}</h3>
              <p>{breed.shortDescription}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Breeds;
