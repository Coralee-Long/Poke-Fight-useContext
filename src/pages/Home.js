import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/battle.css";
import "../styles/home.css";
//import "../styles/mui_styles.css";
import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PokeContext } from "../context/pokeContext";

const Home = () => {

  const navigate = useNavigate();

  const { details } = useContext(PokeContext);
  const [detailsValue, setDetailsValue] = details;
  //get user profile info
  // const [details, setDetails] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // })

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const token = await localStorage.usertoken;
    if (token !== undefined) {
      const decoded = await jwt_decode(token);
      setDetailsValue({
        firstName: decoded.user.first_name,
        lastName: decoded.user.last_name,
        email: decoded.user.email,
      })
    }
    else {
      navigate('/');
    }

  }

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    navigate('/')
  }
  //*************end user profile */


  return (
    <>
      <div className="mainDivHome">
        {/* <h1>Welcome to the Pokemon Games</h1> */}
        <div className="divUserInfo">
          <div>
            {/* <img src={`../backgrounds/userIcon.jpg`} alt="user icon" /> */}
            <p className="headingUsername">username : {`${detailsValue.firstName} ${detailsValue.lastName}`}</p>
          </div>
          <div>
            <Button variant="text" className="btnSignOut" onClick={handleLogout}>Log Out</Button>
          </div>
        </div>
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
