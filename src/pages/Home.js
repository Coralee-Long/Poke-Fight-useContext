import { Link } from "react-router-dom";
import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/home.css";

const Home = (
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
  //console.log(type);
  // console.log(pokemon);
  return (
    <>
      <h1>Welcome to the Pokemon Games</h1>
      <p>Select your Pokemon for the fight</p>
      <PokemonButton
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
      {/* // Gallery COMPONENT: */}
      <div>
        <PokeGallery
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
      </div>
      {/* <Link to={`/choose`}>
                <button>My Pokemon is chosen!!</button>
            </Link> */}
    </>
  );
};

export default Home;
