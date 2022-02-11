import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import { PokeContext } from "../context/pokeContext";
import { Loop } from "@mui/icons-material";
import EndBattleModel from "../Modals/EndBattleModel";
import { useNavigate } from "react-router-dom";

//code to persist usestate
// import { createBrowserHistory } from "history";
// import qs from "qs";

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
  const [disableButton, setDisableButton] = useState(false);

  let navigate = useNavigate();

  //************************persist singlePokeValue  */
  // const history = createBrowserHistory();
  // useEffect(() => {
  //   const filterParams = history.location.search.substr(1);
  //   const filtersFromParams = qs.parse(filterParams);
  //   if (filtersFromParams.singlePokeValue) {
  //     setSinglePokeValue(Array(filtersFromParams.singlePokeValue));
  //   }
  // }, []);
  // console.log(singlePokeValue);
  // useEffect(() => {
  //   history.push(`?singlePokeValue=${singlePokeValue}`);
  // }, [singlePokeValue]);

  //*********************************Code for Battle******************** */
  //get lblUserPoints
  const lblUserPoints = document.getElementById("lblUserPoints");
  const lblComputerPoints = document.getElementById("lblComputerPoints");
  //const btnAttack = document.getElementById("btnAttack");

  const startFightHandler = () => {
    lblUserPoints.innerText = "";
    lblComputerPoints.innerText = "";
    //clearInterval(myInterval);
    setDisableButton(true);

    if (userHealthValue > 0 && computerHealthValue > 0) {
      // User attacks:
      attack(singlePokeValue.base.Attack, randomPokeValue.base.Defense, "user");

      if (userHealthValue > 0 && computerHealthValue > 0) {
        // Computer attacks:
        setTimeout(() => {
          attack(
            randomPokeValue.base.Attack,
            singlePokeValue.base.Defense,
            "computer"
          );
          setDisableButton(false);
        }, 10000); // 10 sec
      }
    }

    //clearInterval(myInterval);
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
    //clear the attack and defence value from label
    lblUserPoints.innerText = "";
    lblComputerPoints.innerText = "";

    if (attackValue > defendValue) {
      let attackDifference = attackValue - defendValue;

      // Scenario 1: User Attacks (Attack Value > Opponent Defense Value)
      if (warriorType === "user") {
        if (attackDifference < computerHealthValue) {
          setComputerHealthValue(
            (prev) => prev - attackDifference
            //         100 -  (60att - 30def) = 60(setComputerHealth to ...)
          );
          //set the attack value
          lblComputerPoints.innerText = `${singlePokeValue.name.english} attacks with: ${attackValue}.
          ${randomPokeValue.name.english} defends with:${defendValue}.
          ${randomPokeValue.name.english} loses ${attackDifference} health points.`;
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
          //set the attack value
          lblUserPoints.innerText = `${randomPokeValue.name.english} attacks with: ${attackValue}.
          ${singlePokeValue.name.english} defends with:${defendValue}.
          ${singlePokeValue.name.english} loses ${attackDifference} health points.`;
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
          //set the attack value
          lblUserPoints.innerText = `${singlePokeValue.name.english} attacks with: ${attackValue}.
          ${randomPokeValue.name.english} defends with:${defendValue}.
          ${singlePokeValue.name.english} loses ${defenceDifference} health points`;
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
          //set the attack value
          lblComputerPoints.innerText = `${randomPokeValue.name.english} attacks with: ${attackValue}.
          ${singlePokeValue.name.english} defends with:${defendValue}.
          ${randomPokeValue.name.english} loses ${defenceDifference} healt points.`;
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
        setEndBattleModelStateValue(true);
        setWinnerValue(randomPokeValue);
      } else if (computerHealthValue <= 0) {
        setComputerHealthValue(0);
        setEndBattleModelStateValue(true);
        setWinnerValue(singlePokeValue);
      }
    })();
  }, [computerHealthValue, userHealthValue, winner]);

  //*********************************Code for Battle******************** */

  if (loadingValue) return <h1>Loading......</h1>;
  if (errorValue) return <h1>Something is wrong....</h1>;
  return (
    <div className="BattleBackground">
      <div className="back">
        <Button
          className="ButtonBack"
          variant="contained"
          onClick={goBackHandler}
        >
          BACK
        </Button>
      </div>
      <div className="topDiv">
        <div className="battleComments">
          <label name="lblUserPoints" id="lblUserPoints"></label>
          <label name="lblComputerPoints" id="lblComputerPoints"></label>
        </div>
      </div>

      <div className="middleDiv">
        <div className="BattleMainContainer">
          {singlePokeValue.length !== 0 ? <UserPoke /> : navigate("/welcome")}
          <ComputerPoke />
        </div>
        <div>{winnerValue !== null ? <EndBattleModel /> : <div></div>}</div>
      </div>
      <div className="bottomDiv">
        <Button
          id="btnAttack"
          className="ButtonAttack"
          variant="contained"
          value="attack"
          onClick={startFightHandler}
          name="btnAttack"
          disabled={disableButton}
        >
          Attack
        </Button>
      </div>
    </div>
  );
};

export default BattleField;
