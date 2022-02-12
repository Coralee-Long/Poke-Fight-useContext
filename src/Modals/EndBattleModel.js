import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/pokeContext";
import { WifiChannelSharp } from "@mui/icons-material";

const endBattleModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EndBattleModel() {
  const {
    endBattleModelState,
    winner,
    confirmModelState,
    userHealth,
    computerHealth,
  } = useContext(PokeContext);

  // const [singlePokeValue, setSinglePokeValue] = singlePoke;
  //const [singlePokeIdValue, setSinglePokeIdValue] = singlePokeId;
  const [endBattleModelStateValue, setEndBattleModelStateValue] =
    endBattleModelState;
  const [winnerValue, setWinnerValue] = winner;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;
  const [userHealthValue, setUserHealthValue] = userHealth;
  const [computerHealthValue, setComputerHealthValue] = computerHealth;

  const handleCloseConfirm = (e) => {
    setEndBattleModelStateValue(false);
    setConfirmModelStateValue(false);
    setUserHealthValue(100);
    setComputerHealthValue(100);
    navigate("/welcome");

    //setSinglePokeIdValue(0);
  };

  let navigate = useNavigate();
  //console.log(singlePokeValue);
  return (
    <>
      <Modal
        open={endBattleModelStateValue} // If open is true, show Modal ( the confirmModelState is currently true)
        onClose={handleCloseConfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={endBattleModelStyle} m="auto" className="boxWinner">
          <p className="wonMessage">{winnerValue.name.english} won!!!</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${winnerValue.id}.png`}
            alt={winnerValue.name.english}
            width="250px"
            height="250px"
          />
          {/* <Button variant="outlined" onClick={() => navigate("/welcome")}> */}
          <div>
            <Button variant="outlined" color="error" size="large" onClick={handleCloseConfirm}>
              Fight Again!!!
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
