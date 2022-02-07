import { useState, useEffect } from "react";
import axios from "axios";

const pokemonData = () => {
  //fetch all pokemon
  const getAllPokemon = async () => {
    try {
      await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
        return res.data;
      });
    } catch (e) {
      return "There is an error while fetching data";
    }
  };
};

export default pokemonData;
