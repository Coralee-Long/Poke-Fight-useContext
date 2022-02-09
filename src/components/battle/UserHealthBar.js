//import React from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useState, useContext } from "react";
import { PokeContext } from "../../context/pokeContext";

const UserHealthBar = ({ value }) => {
  //const [singlePoke, setSinglePoke] = useContext(PokeContext.singlePoke);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      <div>
        <p>{value}</p>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: "17px",
              marginTop: "50px",
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default UserHealthBar;
