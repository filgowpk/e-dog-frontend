import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breed.css";
import { FaArrowCircleLeft, FaPaw } from "react-icons/fa";

const getActivePaws = (level) => {
  if (level == "LOW") {
    return ["active", "inactive", "inactive"];
  }
  if (level == "HIGH") {
    return ["active", "active", "active"];
  }
  return ["active", "active", "inactive"];
};

export const Breed = (props) => {
  const {
    state: { breed },
  } = useLocation();
  const navigate = useNavigate();
  console.log(breed);
  return (
    <div className="main">
      <div className="back-arrow" onClick={() => navigate("/breeds")}>
        <FaArrowCircleLeft size={30} /> <p>powrót do encyklopedii</p>
      </div>
      <div className="name-info">
        <h3>{breed.breed_pl}</h3>
        <p>{breed.shortDescription}</p>
      </div>
      <div className="breed-container">
        <img src={breed.imageUrl} />
        <div className="characteristic">
          <p className="title">Długość życia:</p>{" "}
          <p>{`od ${breed.lifeSpan.min} do ${breed.lifeSpan.max} lat`}</p>
        </div>
        <div className="characteristic">
          <p className="title">Waga:</p> <p>{`około ${breed.weight} kg`}</p>
        </div>
        <div className="characteristic">
          <p className="title">Cena:</p>{" "}
          <p>{`od ${breed.price.min} do ${breed.price.max} PLN`}</p>
        </div>
        <div className="characteristic">
          <p className="title">Poziom Aktywności:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.activityLevel).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Potrzeba czesania:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.groomingNeeds).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Problemy zdrowotne:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.healthIssues).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Poziom linienia:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.sheddingLevel).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Wymagania miejsca:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.spaceNeeds).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Podatność na tresure:</p>{" "}
          <div className="paws">
            {getActivePaws(breed.trainability).map((item) => (
              <FaPaw size={25} className={`paw-${item}`} />
            ))}
          </div>
        </div>
        <div className="characteristic">
          <p className="title">Opis:</p> <p>{breed.description}</p>
        </div>
      </div>
    </div>
  );
};
