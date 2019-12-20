import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log('data not returned', error)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [character]);

  return (
    <section className="character-list">
      {character.map(char => {
        return (
          <CharacterCard key={char.id} details={char} />
        )
      })}
    </section>
  );
}
