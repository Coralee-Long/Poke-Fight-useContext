import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeVsPoke from "./pages/PokeVsPoke";
import BattleField from "./pages/BattleField";
import { useState } from "react";
import Landing from './pages/Landing';
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

const AppRouter = () => {
  // console.log(pokemon);
  return (
    <div>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/welcome" element={<Home />}></Route>
        <Route path="/battle" element={<BattleField />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
