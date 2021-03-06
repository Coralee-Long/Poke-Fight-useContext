import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/pokeContext";
import "../styles/battle.css";
import "../styles/home.css";
import "../styles/mui_styles.css";

const confirmModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmModel() {
  const { singlePoke, singlePokeId, confirmModelState } =
    useContext(PokeContext);

  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [singlePokeIdValue, setSinglePokeIdValue] = singlePokeId;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;

  const handleCloseConfirm = (e) => {
    setConfirmModelStateValue(false);
    setSinglePokeIdValue(0);
  };

  let navigate = useNavigate();
  //console.log(singlePokeValue);
  return (
    <>
      <Modal
        open={confirmModelStateValue} // If open is true, show Modal ( the confirmModelState is currently true)
        onClose={handleCloseConfirm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={confirmModelStyle} className="boxWinner">
          <h1>You chose {singlePokeValue.name.english}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePokeValue.id}.png`}
            alt={singlePokeIdValue.name}
            width="250px"
            height="250px"
          />

          <div>
            <Button variant="contained" className="btnConfirm" onClick={() => navigate("/battle")}>
              Fight with this Poke
            </Button>
          </div>

          <div>
            <Button className="btnConfirm" variant="contained" onClick={handleCloseConfirm}>
              Choose another Poke
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
