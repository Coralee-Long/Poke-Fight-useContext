import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";
import { useState } from "react";

const AppRouter = () => {
  // console.log(pokemon);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/battle" element={<BattleField />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
