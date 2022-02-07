import * as React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PokeGallery from "./PokeGallery";
import { PokeContext } from "../context/pokeContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModel() {
  // {
  // handleClose,
  // singlePoke,
  // setSinglePoke,
  // showConfirmModel,
  // setShowConfirmModel,
  // handleOpenConfirm,
  // setBasicModelState,
  // basicModelState,
  // type,
  // setType,
  // pokemon,
  // setPokemon,
  // singlePokeId,
  // setSinglePokeId,
  // error,
  // setError,
  // loading,
  // setLoading,
  // loadingSingle,
  // setLoadingSingle,
  // }
  const { singlePoke, singlePokeId, basicModelState, confirmModelState } =
    useContext(PokeContext);

  const [basicModelStateValue, setBasicModelStateValue] = basicModelState;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;
  // const handleClose = useContext(PokeContext);
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [singlePokeIdValue, setSinglePokeIdValue] = singlePokeId;
  //const handleOpenConfirm = useContext(PokeContext);
  // const [poke, setPoke] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  //console.log(singlePoke);

  // if (loading) return <h1>Loading......</h1>;
  // if (error) return <h1>Something is wrong....</h1>;

  const handleClose = (e) => {
    //console.log("Inside handle close of basic model");
    setBasicModelStateValue(false);
    //console.log(basicModelState);
    setSinglePokeIdValue(0);
  };

  const handleOpenConfirm = (e) => {
    //console.log("Inside handle open confirm ");
    setBasicModelStateValue(false);
    setConfirmModelStateValue(true);
    // console.log(basicModelState);
    // console.log(confirmModelState);
  };

  return (
    <div>
      <Modal
        open={basicModelStateValue} // basicModelState is Boolean state for only Basic Model
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <h1>{singlePokeValue.name.english}</h1>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePokeValue.id}.png`}
                  alt={singlePokeValue.name.english}
                  width="150px"
                  height="150px"
                />
              </div>
              {singlePokeValue.type.map((poketype, index) => (
                <div key={index}>
                  <p>{poketype}</p>
                </div>
              ))}
              <ul key={singlePokeValue.id}>
                <li>Attack: {singlePokeValue.base.Attack}</li>
                <li>Defense: {singlePokeValue.base.Defense}</li>
                <li>HP: {singlePokeValue.base.HP}</li>
                <li>Speed: {singlePokeValue.base.Speed}</li>
                <li>Special Attack: {singlePokeValue.base["Sp. Attack"]}</li>
                <li>Special Defense: {singlePokeValue.base["Sp. Defense"]}</li>
              </ul>
            </div>
            <Button
              variant="outlined"
              color="error"
              onClick={handleOpenConfirm}
            >
              Choose
            </Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
      {/* <Button onClick={handleOpen}>Poke Info</Button> */}
    </div>
  );
}
