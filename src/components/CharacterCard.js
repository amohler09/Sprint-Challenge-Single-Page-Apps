import React from "react";


export default function CharacterCard(props) {


  return (
    <div>
      <img src={props.details.image} alt='rick and morty character' />
      <p>Name:{props.details.name}</p>
      <p>{props.details.status}</p>
      <p>{props.details.species}</p>
      <p>{props.details.gender}</p>
    </div>
  );
}
