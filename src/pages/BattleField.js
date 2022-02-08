import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import LogicMethods from "../components/logic/LogicMethods";
import { PokeContext } from "../context/pokeContext";

const BattleField = () => {
  const { error, loading, singlePoke, pokemon } = useContext(PokeContext);
  const [errorValue, setErrorValue] = error;
  const [loadingValue, setLoadingValue] = loading;
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [pokemonValue, setPokemonValue] = pokemon;

  if (loadingValue) return <h1>Loading......</h1>;
  if (errorValue) return <h1>Something is wrong....</h1>;
  return (
    <div className="BattleBackground">
      <div className="DivActionButtons">
        {/* for example passed pokemon[0] as ComputerPoke value
        Have to shift logic of getting random poke to here and the pass that as computer poke
        */}
        <Button
          className="ButtonAction"
          variant="contained"
          value="attack"
          onClick={() =>
            LogicMethods.getResult(singlePokeValue, pokemonValue[0], "attack")
          }
        >
          ATTACK
        </Button>
        {/* <Button
          className="ButtonAction"
          variant="contained"
          value="defence"
          onClick={() =>
            LogicMethods.getResult(singlePokeValue, pokemonValue[0], "defence")
          }
        >
          DEFENCE
        </Button> */}
      </div>
      <div className="BattleMainContainer">
        <UserPoke />
        <ComputerPoke />
      </div>
    </div>
  );
};

export default BattleField;
