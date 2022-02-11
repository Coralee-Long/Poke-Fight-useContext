import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import { PokeContext } from "../context/pokeContext";
import { Loop } from "@mui/icons-material";
import EndBattleModel from "../Modals/EndBattleModel";
import { useNavigate } from "react-router-dom";

const BattleField = () => {
  const {
    error,
    loading,
    singlePoke,
    pokemon,
    randomPoke,
    userHealth,
    computerHealth,
    endBattleModelState,
    winner,
    confirmModelState,
  } = useContext(PokeContext);
  const [errorValue, setErrorValue] = error;
  const [loadingValue, setLoadingValue] = loading;
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [pokemonValue, setPokemonValue] = pokemon;
  const [randomPokeValue, setRandomPokeValue] = randomPoke;
  const [userHealthValue, setUserHealthValue] = userHealth;
  const [computerHealthValue, setComputerHealthValue] = computerHealth;
  const [winnerValue, setWinnerValue] = winner;
  const [endBattleModelStateValue, setEndBattleModelStateValue] =
    endBattleModelState;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;
  const [playGame, setPlayGame] = useState(false);

  let navigate = useNavigate();
  //*********************************Code for Battle******************** */

  const startFightHandler = () => {
    if (userHealthValue > 0 && computerHealthValue > 0) {
      attack(singlePokeValue.base.Attack, randomPokeValue.base.Defense, "user");
      if (userHealthValue > 0 && computerHealthValue > 0) {
        attack(
          randomPokeValue.base.Attack,
          singlePokeValue.base.Defense,
          "computer"
        );
      }
    }
  };

  //go back to welcome page
  const goBackHandler = () => {
    setEndBattleModelStateValue(false);
    setConfirmModelStateValue(false);
    setUserHealthValue(100);
    setComputerHealthValue(100);
    navigate("/welcome");
  };

  const attack = async (attackValue, defendValue, warriorType) => {
    if (attackValue > defendValue) {
      let attackDifference = attackValue - defendValue;

      // Scenario 1
      if (warriorType === "user") {
        if (attackDifference < computerHealthValue) {
          setComputerHealthValue(
            (prev) => prev - attackDifference
            //         100 -  (60att - 30def) = 60(setComputerHealth to ...)
          );
          console.log("inside if(first step 1) where warrior type===user");
          console.log(`UserAttack: ${attackValue}`);
          console.log(`ComputerDefend: ${defendValue}`);
        } else {
          setComputerHealthValue(0);
        }
        // Scenario 4
      } else if (warriorType === "computer") {
        //set the user value
        if (attackDifference < userHealthValue) {
          setUserHealthValue(
            (prev) => prev - attackDifference
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log(
            "inside else if((first step 1)) where warrior type===computer"
          );
          console.log(`ComputerAttack: ${attackValue}`);
          console.log(`UserDefend: ${defendValue}`);
        } else {
          setUserHealthValue(0);
        }
      } else {
        console.log("Both values are equal");
      }
    } else {
      let defenceDifference = defendValue - attackValue;
      // Scenario 2,3
      if (warriorType === "user") {
        if (defenceDifference < userHealthValue) {
          setUserHealthValue(
            (prev) => prev - defenceDifference
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log("inside else( step -2 ) where warrior type===user");
          console.log(`UserAttack: ${attackValue}`);
          console.log(`ComputerDefend: ${defendValue}`);
        } else {
          setUserHealthValue(0);
        }
        // Scenario 3
      } else if (warriorType === "computer") {
        if (defenceDifference < computerHealthValue) {
          //set the user value
          setComputerHealthValue(
            (prev) => prev - defenceDifference
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log(
            "inside else if( step -1 ) where warrior type===computer"
          );
          console.log(`ComputerAttack: ${attackValue}`);
          console.log(`UserDefend: ${defendValue}`);
        } else {
          setComputerHealthValue(0);
        }
      } else {
        console.log("Both values are equal");
      }
    }
  };

  useEffect(() => {
    (async function () {
      if (userHealthValue <= 0) {
        setUserHealthValue(0);
        //setWinner(singlePokeValue);
        setEndBattleModelStateValue(true);
        setWinnerValue(singlePokeValue);
        console.log("winner");
        console.log(winnerValue);
        // await alert(`${singlePokeValue.name.english} LOST!`);
      } else if (computerHealthValue <= 0) {
        setComputerHealthValue(0);
        //setWinner(singlePokeValue);
        setEndBattleModelStateValue(true);
        setWinnerValue(singlePokeValue);
        console.log(`winner: ${winnerValue}`);

        // await alert(`${randomPokeValue.name.english} LOST!`);
      }
    })();
  }, [computerHealthValue, userHealthValue, winner]);

  //*********************************Code for Battle******************** */

  if (loadingValue) return <h1>Loading......</h1>;
  if (errorValue) return <h1>Something is wrong....</h1>;
  return (
    <div className="BattleBackground">
      <div className="DivActionButtons">
        {/* for example passed pokemon[0] as ComputerPoke value
        Have to shift logic of getting random poke to here and the pass that as computer poke
        */}
        <Button
          className="ButtonAction"
          variant="contained"
          value="attack"
          onClick={startFightHandler}
        >
          ATTACK
        </Button>
        <Button
          className="ButtonAction"
          variant="contained"
          onClick={goBackHandler}
        >
          BACK
        </Button>
      </div>
      <div className="BattleMainContainer">
        {singlePokeValue !== null ? <UserPoke /> : <div></div>}

        <ComputerPoke />
      </div>
      <div>{winnerValue !== null ? <EndBattleModel /> : <div></div>}</div>
    </div>
  );
};

export default BattleField;
