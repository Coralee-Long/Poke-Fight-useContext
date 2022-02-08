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
        <AppRouter />
      </PokeController>
    </>
  );
};

export default App;
