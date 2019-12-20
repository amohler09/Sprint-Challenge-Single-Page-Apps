import React from "react";
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: lightblue;
margin: auto;
width: 30%;
padding: 2%;
border: 2px solid darkslategrey;
font-size: 1rem;
margin-bottom: 10%
box-shadow: -5px 5px 5px slategrey;
`;

const Img = styled.img`
margin: auto;
box-shadow: -5px 5px 5px slategrey;
margin-bottom: 5%;
`;


export default function CharacterCard(props) {


  return (
    <div>
      <Img src={props.details.image} alt='rick and morty character' />
      <Div>
      <p>Name:{ props.details.name}</p>
      <p>Status: {props.details.status}</p>
      <p>Species: {props.details.species}</p>
      <p>Identifies as: {props.details.gender}</p>
      </Div>
    </div>
  );
}
