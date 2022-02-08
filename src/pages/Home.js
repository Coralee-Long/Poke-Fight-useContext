import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Pokemon Games</h1>
      <p>Select your Pokemon for the fight</p>
      <PokemonButton />
      {/* // Gallery COMPONENT: */}
      <div>
        <PokeGallery />
      </div>
    </>
  );
};

export default Home;
