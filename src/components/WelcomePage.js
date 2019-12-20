import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
text-shadow: -5px 5px 8px green;
`;

const StyledDiv = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
padding: 5%;
margin: auto;

`;

const Tagline = styled.h2`
text-align: center;
margin-top: 8%;
font-size: 2rem;
text-shadow: -5px 5px 3px cadetblue;

`;





export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        </Header>
        <StyledDiv>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search for Aliveness</Link>
        <Link to='/characters'>Full Character List</Link>
        </StyledDiv>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Tagline>Nothing to see here, folks.</Tagline>
        
      
    </section>
  );
}
