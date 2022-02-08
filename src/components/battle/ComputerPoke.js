import { useState, useEffect, useContext } from "react";
import UserHealthBar from "./UserHealthBar";
import { PokeContext } from "../../context/pokeContext";

const ComputerPoke = () => {
  const { pokemon, randomPoke } = useContext(PokeContext);
  // const [compPoke, setCompPoke] = useState({});

  const [pokemonValue, setPokemonValue] = pokemon;
  const [randomPokeValue, setRandomPokeValue] = randomPoke;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const computerPokemon = async () => {
    const randomId = (await Math.floor(Math.random() * 809)) + 1;
    await setRandomPokeValue(pokemonValue.find((poke) => poke.id === randomId));
    setLoading(true);
  };

  useEffect(() => {
    computerPokemon();
  }, []);

  console.log(randomPokeValue);
  if (!randomPokeValue) {
    setError(true);
  }
  if (!error)
    return (
      <div className="ComputerMainContainer">
        {loading && randomPokeValue && (
          <>
            <div className="healthBarUserContainer">
              <UserHealthBar Poke={randomPokeValue} />
            </div>
            <h1 className="BattleMainHeading">
              {randomPokeValue.name.english}
            </h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randomPokeValue.id}.png`}
              alt={randomPokeValue.name.english}
              width="600px"
              height="auto"
              value={randomPokeValue.id}
              name={randomPokeValue.name.english}
            />
          </>
        )}
      </div>
    );
};

export default ComputerPoke;
