import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
  const { singlePoke, singlePokeId, basicModelState, confirmModelState } =
    useContext(PokeContext);

  const [basicModelStateValue, setBasicModelStateValue] = basicModelState;
  const [confirmModelStateValue, setConfirmModelStateValue] = confirmModelState;
  // const handleClose = useContext(PokeContext);
  const [singlePokeValue, setSinglePokeValue] = singlePoke;
  const [singlePokeIdValue, setSinglePokeIdValue] = singlePokeId;

  // if (loading) return <h1>Loading......</h1>;
  // if (error) return <h1>Something is wrong....</h1>;

  const handleClose = (e) => {
    setBasicModelStateValue(false);
    setSinglePokeIdValue(0);
  };

  const handleOpenConfirm = (e) => {
    setBasicModelStateValue(false);
    setConfirmModelStateValue(true);
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
    </div>
  );
}
