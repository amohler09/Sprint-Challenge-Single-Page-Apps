import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const SearchSection = styled.div`
margin: auto;
padding: 10%;
width: 80%;
text-align: center;
`;

const Label = styled.label`
color: darkgreen;
font-size: 2rem;
margin: auto;
text-shadow: -5px 5px 5px lawngreen;
margin-bottom: 10%;
`;

const Input = styled.input`
font-size: 1.25rem;
color: teal;
box-shadow: -5px 5px 5px darkgreen;
outline: none;
`;

const Image = styled.img`
box-shadow: -5px 5px 5px slategrey;
margin-bottom: 5%;
`;


const InnerDiv = styled.div`
background-color: greenyellow
margin: auto;
width: 30%;
padding: 2%;
border: 2px dashed darkgreen;
font-size: 1rem;
margin-bottom: 10%
box-shadow: -5px 5px 5px slategrey;
font-weight: bold;
`;


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
    <SearchSection className="search-form">
        <form>
          <Label htmlFor='search'>Is your favorite character still alive?</Label><br /><br />
          <Input 
            id='search'
            type='text' 
            size='30'
            placeholder='Type a name to find out!'
            onChange={handleChange}
            value={search}
            name='search' /><br /><br /><br />
        </form>

        <div>
          {data.map(item => {
            return (
              <div>
              <Image src={item.image} alt='rick and morty character' />
              <InnerDiv>
              <p>Name: {item.name}</p>
              <p>Currently {item.status}</p>
              <p>Identifies as {item.gender}</p>
              </InnerDiv>
              </div>
              
              
          )})}
        </div>
    </SearchSection>
  );
}
