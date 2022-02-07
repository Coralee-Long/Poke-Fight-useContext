import React from "react";
import UserHealthBar from "./UserHealthBar";
import { useContext, useState } from "react";
import { PokeContext } from "../../context/pokeContext";

const UserPoke = () => {
  const { singlePoke } = useContext(PokeContext);

  const [singlePokeValue, setSinglePokeValue] = singlePoke;

  console.log("user poke:");
  console.log(singlePokeValue);

  return (
    <div className="UserMainContainer">
      <div className="healthBarUserContainer">
        <UserHealthBar Poke={singlePokeValue} />
      </div>
      <h1 className="BattleMainHeading">{singlePokeValue.name.english}</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePokeValue.id}.png`}
        alt={singlePokeValue.name.english}
        width="600px"
        height="auto"
        value={singlePokeValue.id}
        name={singlePokeValue.name.english}
      />
    </div>
  );
};

export default UserPoke;
