import "../styles/battle.css";
import ComputerPoke from "../components/battle/ComputerPoke";
import UserPoke from "../components/battle/UserPoke";
import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import LogicMethods from "../components/logic/LogicMethods";
import { PokeContext } from "../context/pokeContext";
import { Loop } from "@mui/icons-material";

const BattleField = () => {
  const {
    error,
    loading,
    singlePoke,
    pokemon,
    randomPoke,
    userHealth,
    computerHealth,
  } = useContext(PokeContext);
  const [errorValue, setErrorValue] = error;
  const [loadingValue, setLoadingValue] = loading;
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [pokemonValue, setPokemonValue] = pokemon;
  const [randomPokeValue, setRandomPokeValue] = randomPoke;
  const [userHealthValue, setUserHealthValue] = userHealth;
  const [computerHealthValue, setComputerHealthValue] = computerHealth;
  const [playGame, setPlayGame] = useState(false);
  //*********************************Code for Battle******************** */

  const startFightHandler = () => {
    // setPlayGame(true);
    // if (playGame) {
    //   // If playGame is true ->
    //   //if (userHealthValue)
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
    //  computerTurn()
    // } else console.log(`game over`);
  };

  const attack = async (attackValue, defendValue, warriorType) => {
    // let userAttack = singlePokeValue.base.Attack;
    // let userAttack = attackValue;
    // console.log(`attackValue: ${attackValue}`);

    //let computerDefend = randomPokeValue.base.Defense;
    //let computerDefend = defendValue;
    //console.log(`defendValue: ${defendValue}`);
    //   1.    50-user -----attack             30- computer  --defence
    //2. user=30   -----attack                 50=computer  --defence
    //3. computer=10 --attack      20=user---defence
    //4. computer=40 --attack      30=user---defence

    if (attackValue > defendValue) {
      // Scenario 1
      if (warriorType === "user") {
        //     150      -  20  (130)             100
        if (attackValue - defendValue < computerHealthValue) {
          setComputerHealthValue(
            (prev) => prev - (attackValue - defendValue)
            //         100 -  (150att - 30def) = 120(setComputerHealth to ...)
          );
          console.log("inside if(first step 1) where warrior type===user");
          console.log(`UserAttack: ${attackValue}`);
          console.log(`ComputerDefend: ${defendValue}`);
          // console.log("computer health value: " + computerHealthValue);
        } else {
          setComputerHealthValue(0);
          //await alert(`${randomPokeValue.name.english} LOST!`);
        }
        // Scenario 4
      } else if (warriorType === "computer") {
        //set the user value
        if (attackValue - defendValue < userHealthValue) {
          setUserHealthValue(
            (prev) => prev - (attackValue - defendValue)
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log(
            "inside else if((first step 1)) where warrior type===computer"
          );
          console.log(`ComputerAttack: ${attackValue}`);
          console.log(`UserDefend: ${defendValue}`);
          // console.log("user health value: " + userHealthValue);
        } else {
          setUserHealthValue(0);
          //await alert(`${singlePokeValue.name.english} LOST!`);
        }
      } else {
        console.log("Both values are equal");
      }
    } else {
      // Scenario 2,3
      if (warriorType === "user") {
        if (defendValue - attackValue < userHealthValue) {
          setUserHealthValue(
            (prev) => prev - (defendValue - attackValue)
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log("inside else( step -2 ) where warrior type===user");
          console.log(`UserAttack: ${attackValue}`);
          console.log(`ComputerDefend: ${defendValue}`);
          //console.log("user health value: " + userHealthValue);
        } else {
          setUserHealthValue(0);
          //await alert(`${singlePokeValue.name.english} LOST!`);
        }
        // Scenario 3
      } else if (warriorType === "computer") {
        if (defendValue - attackValue < computerHealthValue) {
          //set the user value
          setComputerHealthValue(
            (prev) => prev - (defendValue - attackValue)
            //         100 -  (50 - 30) = 80 (setComputerHealth to 80%)
          );
          console.log(
            "inside else if( step -1 ) where warrior type===computer"
          );
          console.log(`ComputerAttack: ${attackValue}`);
          console.log(`UserDefend: ${defendValue}`);
          //console.log("computer health value: " + computerHealthValue);
        } else {
          setComputerHealthValue(0);
          // await alert(`${randomPokeValue.name.english} LOST!`);
        }
      } else {
        console.log("Both values are equal");
      }
    }
  };

  // const computerTurn = async () => {
  //   let computerAttack = randomPokeValue.base.Attack;
  //   console.log(`computerAttack: ${computerAttack}`);

  //   let userDefend = singlePokeValue.base.Defense;
  //   console.log(`userDefend: ${userDefend}`);

  //   if (computerAttack > userDefend) {
  //     setUserHealthValue((prev) => prev - (computerAttack - userDefend));

  //     console.log(userHealthValue);
  //   } else {
  //     setUserHealthValue((prev) => userDefend - computerAttack);
  //     console.log(computerHealthValue);
  //   }
  // };

  //   const battle = () => {
  //     if either have health > 0 :
  //
  //       Loop:

  // userturn()
  // computerturn()
  //
  // }
  useEffect(() => {
    (async function () {
      if (userHealthValue === 0) {
        setUserHealthValue(0);
        await alert(`${singlePokeValue.name.english} LOST!`);
      } else if (computerHealthValue === 0) {
        setComputerHealthValue(0);
        await alert(`${randomPokeValue.name.english} LOST!`);
      }
    })();
  }, [computerHealthValue, userHealthValue]);

  //console.log(`computerHealth: ${computerHealth}`);
  // useEffect(() => {
  //   if (playGame) {
  //     // If playGame is true ->
  //     //if (userHealthValue)
  //     userTurn(
  //       singlePokeValue.base.Attack,
  //       randomPokeValue.base.Defense,
  //       "user"
  //     );
  //     userTurn(
  //       randomPokeValue.base.Attack,
  //       singlePokeValue.base.Defend,
  //       "computer"
  //     );
  //     //  computerTurn()
  //   } else console.log(`game over`);
  // }, []);
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
          // LogicMethods.getResult(singlePokeValue, randomPokeValue, "attack")
        >
          ATTACK
        </Button>
        {/* <Button
          className="ButtonAction"
          variant="contained"
          value="defence"
          onClick={() =>
            LogicMethods.getResult(singlePokeValue, pokemonValue[0], "defence")
          }
        >
          DEFENCE
        </Button> */}
      </div>
      <div className="BattleMainContainer">
        <UserPoke />
        <ComputerPoke />
      </div>
    </div>
  );
};

export default BattleField;
