import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = (props) => {
  const [type, setType] = useState("Normal");
  const [pokemon, setPokemon] = useState([]);
  const [singlePokeId, setSinglePokeId] = useState(0);
  const [singlePoke, setSinglePoke] = useState([]);
  const [randomPoke, setRandomPoke] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [basicModelState, setBasicModelState] = useState(false);
  const [confirmModelState, setConfirmModelState] = useState(false);
  const [userHealth, setUserHealth] = useState(100);
  const [computerHealth, setComputerHealth] = useState(100);

  // FETCHING ALL DATA:
  //fetch all Pokemon
  const fetchData = async () => {
    try {
      await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
        // console.log(res.data);
        setPokemon(res.data);
        setLoading(false);
      });
    } catch (e) {
      setError(true);
    }
  };

  // fetch one Pokemon
  const fetchSinglePokeData = async () => {
    try {
      await axios
        .get(`https://poke-wars.herokuapp.com/pokemon/${singlePokeId}`)
        //.get(`https://poke-wars.herokuapp.com/pokemon/1`)
        .then((res) => {
          setSinglePoke(res.data);
          setLoadingSingle(false);
          // console.log(res.data);
        });
    } catch (e) {
      setError(true);
    }
  };
  // ----------------------------------------------

  // USE EFFECTS FOR DATA FETCHING
  useEffect(() => {
    if (singlePokeId !== 0) {
      fetchSinglePokeData();
    } else {
      setLoadingSingle(true);
    }
  }, [singlePokeId, loadingSingle]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemon: [pokemon, setPokemon],
        type: [type, setType],
        singlePoke: [singlePoke, setSinglePoke],
        singlePokeId: [singlePokeId, setSinglePokeId],
        error: [error, setError],
        loading: [loading, setLoading],
        loadingSingle: [loadingSingle, setLoadingSingle],
        basicModelState: [basicModelState, setBasicModelState],
        confirmModelState: [confirmModelState, setConfirmModelState],
        randomPoke: [randomPoke, setRandomPoke],
        userHealth: [userHealth, setUserHealth],
        computerHealth: [computerHealth, setComputerHealth],
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};
