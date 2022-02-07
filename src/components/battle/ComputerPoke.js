import { useState, useEffect, useContext } from "react";
import UserHealthBar from "./UserHealthBar";
import { PokeContext } from "../../context/pokeContext";

const ComputerPoke = () =>
  //   {
  //   type,
  //   setType,
  //   pokemon,
  //   setPokemon,
  //   singlePoke,
  //   setSinglePoke,
  //   singlePokeId,
  //   setSinglePokeId,
  //   error,
  //   setError,
  //   loading,
  //   setLoading,
  //   loadingSingle,
  //   setLoadingSingle,
  // }
  {
    const { pokemon, randomPoke } = useContext(PokeContext);

    const [pokemonValue, setPokemonValue] = pokemon;
    const [randomPokeValue, setRandomPokeValue] = randomPoke;

    // let compPoke = 1;
    // const getRandomPoke = () => {
    // get the random id
    const randomId = Math.floor(Math.random() * 809) + 1;
    console.log("Randomid:" + randomId);
    let compPoke = pokemonValue.find((poke) => poke.id === randomId);
    //   setRandomPokeValue(compPoke);
    console.log(pokemonValue);
    console.log(randomPokeValue);
    console.log(compPoke);
    //return randomPoke;
    // };

    // useEffect(() => {
    //   getRandomPoke();
    // }, [randomPokeValue]);

    return (
      <div className="ComputerMainContainer">
        <div className="healthBarUserContainer">
          <UserHealthBar Poke={compPoke} />
        </div>
        <h1 className="BattleMainHeading">{compPoke.name.english}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${compPoke.id}.png`}
          alt={compPoke.name.english}
          width="600px"
          height="auto"
          value={compPoke.id}
          name={compPoke.name.english}
        />
      </div>
    );
  };

export default ComputerPoke;
