import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";
import { useState } from "react";

const AppRouter = (
  {
    // type,
    // setType,
    // pokemon,
    // setPokemon,
    // singlePoke,
    // setSinglePoke,
    // singlePokeId,
    // setSinglePokeId,
    // error,
    // setError,
    // loading,
    // setLoading,
    // loadingSingle,
    // setLoadingSingle,
  }
) => {
  // console.log(pokemon);
  return (
    <div>
      <Routes
      // type={type}
      // setType={setType}
      // pokemon={pokemon}
      // setPokemon={setPokemon}
      // singlePoke={singlePoke}
      // setSinglePoke={setSinglePoke}
      // singlePokeId={singlePokeId}
      // setSinglePokeId={setSinglePokeId}
      // error={error}
      // setError={setError}
      // loading={loading}
      // setLoading={setLoading}
      // loadingSingle={loadingSingle}
      // setLoadingSingle={setLoadingSingle}
      >
        <Route
          path="/"
          element={
            <Home
            // type={type}
            // setType={setType}
            // pokemon={pokemon}
            // setPokemon={setPokemon}
            // singlePoke={singlePoke}
            // setSinglePoke={setSinglePoke}
            // singlePokeId={singlePokeId}
            // setSinglePokeId={setSinglePokeId}
            // error={error}
            // setError={setError}
            // loading={loading}
            // setLoading={setLoading}
            // loadingSingle={loadingSingle}
            // setLoadingSingle={setLoadingSingle}
            />
          }
        ></Route>
        <Route
          path="/battle"
          element={
            <BattleField
            // type={type}
            // setType={setType}
            // pokemon={pokemon}
            // setPokemon={setPokemon}
            // singlePoke={singlePoke}
            // setSinglePoke={setSinglePoke}
            // singlePokeId={singlePokeId}
            // setSinglePokeId={setSinglePokeId}
            // error={error}
            // setError={setError}
            // loading={loading}
            // setLoading={setLoading}
            // loadingSingle={loadingSingle}
            // setLoadingSingle={setLoadingSingle}
            />
          }
        ></Route>

        {/*these are routes to get data from API */}
      </Routes>
    </div>
  );
};

export default AppRouter;
