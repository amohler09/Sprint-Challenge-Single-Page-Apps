import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results.filter(
          character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
         console.log(characters);
         setData(characters);
      })
      .catch(error => console.log('error on search', error))
  },[search] )

    const handleChange = event => {setSearch(event.target.value)};
 
  return (
    <section className="search-form">
        <form>
          <label htmlFor='search'>Is your favorite character still alive?</label><br />
          <input 
            id='search'
            type='text' 
            size='30'
            placeholder='Type a name to find out!'
            onChange={handleChange}
            value={search}
            name='search' />
        </form>

        <div>
          {data.map(item => {
            return (
            <div>
              <img src={item.image} alt='rick and morty character' />
              <p>Name: {item.name}</p>
              <p>Currently {item.status}</p>
              <p>Identifies as {item.gender}</p>

              
              </div>
          )})}
        </div>
    </section>
  );
}
