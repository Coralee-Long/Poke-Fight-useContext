import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { PokeContext } from "../context/pokeContext";

const PokemonButton = () => {
  const { type } = useContext(PokeContext);

  const [typeValue, setTypeValue] = type;

  //creating of an array of pokemon types
  const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(type);
  };

  const handleClick = (e) => {
    setTypeValue(e.target.value);
    //console.log(type);
    //find all buttons
    const buttons = e.target.form.getElementsByClassName("btnPokes");
    //set button colors back to normal
    for (let i = 0; i < buttons.length; i++) {
      console.log("inside buttons")
      buttons[i].style.color = "white";
    }
    //set selected button color to blue
    e.target.style.color = "blue";
    //e.target.style.backgroundcolor = "white";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="button-container">
          {pokemonTypes.map((p, index) => (
            <Button
              type="submit"
              name={p}
              value={p}
              onClick={handleClick}
              variant="contained"
              style={{ margin: "70px !important" }}
              key={index}
              className="btnPokes"
            >
              {p}
            </Button>
          ))}
        </div>
      </form>
    </>
  );
};

export default PokemonButton;
