import React from "react";

const pokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
  let imgSrc = `${pokeAPI} ${props.id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-name"> {props.name} </div>
      <div className="Pokecard-img"> {props.imgSrc} </div>
      <div className="Pokecard-type"> {props.type} </div>
      <div className="Pokecard-exp">{props.exp} </div>
    </div>
  );
};

export default Pokecard;
