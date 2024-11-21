import React, { useState } from 'react';
import { FaDog, FaPaw, FaBone, FaHeart, FaCouch, FaSearch } from 'react-icons/fa'
import './Breeds.css';

function Breeds() {
  const breeds = [
    {
      name: 'Berneński pies pasterski',
      description: 'Spokojny, silny, lojalny',
      image: 'src/assets/breeds/berneski_pies_pasterski.png',
    },
    {
      name: 'Shiba Inu',
      description: 'Czuły, aktywny, lojalny',
      image: 'src/assets/breeds/shiba_inu.png',
    },
    {
      name: 'Owczarek niemiecki',
      description: 'Odważny, pewny siebie, mądry',
      image: 'src/assets/breeds/owczarek_niemiecki.png',
    },
    {
      name: 'Border Collie',
      description: 'Inteligentny, pracowity, energiczny',
      image: 'src/assets/breeds/border_collie.png',
    },
    {
      name: 'Owczarek',
      description: 'Wesoły, radosny, spokojny',
      image: 'src/assets/breeds/owczarek.png',
    },
    {
      name: 'Samoyed',
      description: 'Przyjazny, wesoły, towarzyski',
      image: 'src/assets/breeds/samoyed.png',
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    kidsFriendly: false,
    otherAnimalsFriendly: false,
    noisy: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
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
              <input type="text" id="search-name" placeholder="Wpisz nazwę rasy..." />
            </div>
          </div>

          <div className="filter-group">
            <h3>Grupa</h3>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleFilter('Psy pasterskie / Owczarki')}
              />
              Psy pasterskie / Owczarki
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleFilter('Spice i psy w typie pierwotnym')}
              />
              Szpice i psy w typie pierwotnym
            </label>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Terriery')} />
              Terriery
            </label>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Jamniki')} />
              Jamniki
            </label>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Aportery, płochacze i psy dowodne')} />
              Aportery, płochacze i psy dowodne
            </label>
            <a href="#" className="more-filters">Pokaż kolejne 5 filtrów</a>
          </div>

          <div className="filter-group">
            <h3>Wielkość</h3>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Rasy duże')} />
              Rasy duże
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleFilter('Rasy średnie')}
              />
              Rasy średnie
            </label>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Rasy małe')} />
              Rasy małe
            </label>
          </div>

          <div className="filter-group">
            <h3>Wielkość</h3>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Rasy duże')} />
              Rasy duże
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleFilter('Rasy średnie')}
              />
              Rasy średnie
            </label>
            <label>
              <input type="checkbox" onChange={() => toggleFilter('Rasy małe')} />
              Rasy małe
            </label>
          </div>

          <div className="filter-group">
          <details className={`filter-details ${isOpen ? 'open' : ''}`}>
            <summary onClick={toggleDropdown}><h3>Charakter</h3></summary>
            <div className="checkbox-group">
              <label>
                <input 
                  type="checkbox" 
                  name="kidsFriendly" 
                  checked={filters.kidsFriendly}
                  onChange={handleCheckboxChange}
                />
                Przyjazne względem dzieci
              </label>
              <label>
                <input 
                  type="checkbox" 
                  name="otherAnimalsFriendly" 
                  checked={filters.otherAnimalsFriendly}
                  onChange={handleCheckboxChange}
                />
                Przyjazne dla innych zwierząt
              </label>
              <label>
                <input 
                  type="checkbox" 
                  name="noisy" 
                  checked={filters.noisy}
                  onChange={handleCheckboxChange}
                />
                Hałaśliwe
              </label>
            </div>
            <a href="#" className="more-filters">Pokaż kolejne 12 filtrów</a>
          </details>
          </div>

          <button className="filter-button">Filtruj</button>
        </aside>
      </div>

      <main className="breeds-main">
        <div className="popular-filters">
          <h2>Popularne filtry</h2>
          <div className="filter-buttons">
            <button onClick={() => toggleFilter('Rasy małe')}>
              <FaDog size={30} /> Rasy małe
            </button>
            <button onClick={() => toggleFilter('Rasy średnie')}>
              <FaPaw size={30} /> Rasy średnie
            </button>
            <button onClick={() => toggleFilter('Rasy duże')}>
              <FaBone size={30} /> Rasy duże
            </button>
            <button onClick={() => toggleFilter('Rasy aktywne')}>
              <FaHeart size={30} /> Rasy aktywne
            </button>
            <button onClick={() => toggleFilter('Kanapowce')}>
              <FaCouch size={30} /> Kanapowce
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
          {breeds.map((breed, index) => (
            <div className="breed-card" key={index}>
              <img
                src={breed.image}
                alt={breed.name}
                className="breed-card-image"
              />
              <h3>{breed.name}</h3>
              <p>{breed.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Breeds;
