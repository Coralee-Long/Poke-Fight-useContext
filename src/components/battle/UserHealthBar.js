//import React from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useState, useContext } from "react";
import { PokeContext } from "../../context/pokeContext";
import "../../styles/battle.css";
import "../../styles/home.css";
//import "../../styles/mui_styles.css";
import { makeStyles } from '@material-ui/core';

//mui list item style
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: '3.5px solid #3667b0',
    borderRadius: '12px',
    filter: ' drop - shadow(10px 10px 10px rgba(0, 0, 0, 0.4))',
  },
  linearProgressBar1: {
    background: 'linear-gradient(90deg, red, yellow, green)',
  },
}));

const UserHealthBar = ({ value }) => {
  //const [singlePoke, setSinglePoke] = useContext(PokeContext.singlePoke);
  const classes = useStyles();
  // height: 10,
  // borderRadius: 5,
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: '3.5px solid #3667b0',
    borderRadius: '12px',
    filter: ' drop - shadow(10px 10px 10px rgba(0, 0, 0, 0.4))',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: 'linear-gradient(90deg, red, yellow, green)',
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },

  }));

  return (
    <>
      <div>
        <div className="healthBarContainer">
          <p className="healthBarValue">{value}</p>
          <BorderLinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: "30px",
            }}

          />
        </div>
      </div>
    </>
  );
};

export default UserHealthBar;
