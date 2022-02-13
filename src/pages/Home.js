import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="mainDivHome">
        {/* <h1>Welcome to the Pokemon Games</h1> */}
        <h1 className="headingHome">SELECT YOUR POKEMON FOR FIGHT</h1>
        <PokemonButton />
        {/* // Gallery COMPONENT: */}
        <div>
          <PokeGallery />
        </div>

      </div>
    </>
  );
};

export default Home;
