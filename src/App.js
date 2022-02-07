import "./App.css";
import AppRouter from "./AppRouter";
import { PokeController } from "./context/pokeContext";

const App = () => {
  // ----------------------------------------------
  // console.log("hellop");
  // console.log(pokemon);
  return (
    <>
      <PokeController>
        <AppRouter
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
      </PokeController>
    </>
  );
};

export default App;
