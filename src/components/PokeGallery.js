import { useState, useEffect, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import "../styles/mui_styles.css";
import BasicModel from "./BasicModel";
import ConfirmModel from "./ConfirmModel";
import { PokeContext } from "../context/pokeContext";

const PokeGallery = () => {
  // ERROR & LOADING STATES DEFINED:
  const {
    singlePoke,
    singlePokeId,
    type,
    pokemon,
    error,
    loading,
    loadingSingle,
    basicModelState,
    confirmModelState,
  } = useContext(PokeContext);

  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [singlePokeIdValue, setSinglePokeIdValue] = singlePokeId;
  const [typeValue, setTypeValue] = type;
  const [pokemonValue, setPokemonValue] = pokemon;
  const [errorValue, setErrorValue] = error;
  const [loadingValue, setLoadingValue] = loading;
  const [loadingSingleValue, setLoadingSingleValue] = loadingSingle;
  const [basicModelStateValue, setBasicModelStateValue] = basicModelState;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;

  // CLICK HANDLERS FOR HOME PAGE:
  const handleOpen = (e) => {
    setSinglePokeIdValue(e.target.attributes["value"].value);
    setBasicModelStateValue(true);
    // setOpen(true);
  };

  // FILTERING DATA:
  //filter pokemon based on it's selection

  const filteredPokes =
    pokemonValue && pokemonValue.filter((p) => p.type.includes(typeValue));

  // IF Data is still loading or or error:
  if (loadingValue) return <h1>Loading......</h1>;
  if (errorValue) return <h1>Something is wrong....</h1>;
  // ELSE return all the data below:
  return (
    <ImageList
      id="imgList"
      sx={{ width: 200, height: 450 }}
      style={{ gridTemplateColumns: "auto minmax(1fr,1fr, 1fr, 1fr)" }}
    >
      {loadingSingleValue === false ? (
        <>
          <BasicModel />
          <ConfirmModel />
        </>
      ) : (
        <div></div>
      )}
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {filteredPokes.map((poke) => (
        <ImageListItem
          key={poke.id}
          onClick={handleOpen}
          style={{ backgroundColor: "lightblue" }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
            alt={poke.name.english}
            width="200px"
            height="200px"
            value={poke.id}
            name={poke.name.english}
          />
          <ImageListItemBar title={poke.name.english} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PokeGallery;
