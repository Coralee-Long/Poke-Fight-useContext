import UserHealthBar from "./UserHealthBar";
import { useContext, useState, useEffect } from "react";
import { PokeContext } from "../../context/pokeContext";
import { useNavigate } from "react-router-dom";
// import "../styles/battle.css";
// import "../styles/home.css";
// import "../styles/mui_styles.css";

const navigate = useNavigate;

const UserPoke = () => {
  const { singlePoke, userHealth } = useContext(PokeContext);
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [userHealthValue, setUserHealthValue] = userHealth;

  const [error, setError] = useState(false);

  useEffect(() => {
    if (singlePokeValue === undefined) {
      setError(true);
      navigate("/welcome");
    }
  }, []);

  if (singlePokeValue !== undefined)
    return (
      <div className="UserMainContainer">
        <div className="healthBarUserContainer">
          <UserHealthBar value={userHealthValue} />
        </div>

        <img
          id="pokeImage"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePokeValue.id}.png`}
          alt={singlePokeValue.name.english}
          value={singlePokeValue.id}
          name={singlePokeValue.name.english}
        />
        <h1 className="BattleMainHeading">{singlePokeValue.name.english}</h1>
      </div>
    );
};

export default UserPoke;
